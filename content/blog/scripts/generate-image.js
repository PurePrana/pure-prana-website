#!/usr/bin/env node

// Generate AI images using DALL-E 3. Usage: node generate-image.js [options] "your prompt"
// Options: -f <filename> (custom name), -s <size> (1024x1024/1792x1024/1024x1792), -q <quality> (standard/hd), --style <style> (natural/vivid), -h (help)

import { spawn } from 'child_process'
import { createInterface } from 'readline'
import { resolve, dirname, join } from 'path'
import { readFileSync, renameSync } from 'fs'

// Load environment variables from MCP server .env file
import { fileURLToPath } from 'url'
const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(__dirname, '../../..')
const envPath = resolve(projectRoot, 'mcp-servers/dalle-image/.env')
const envContent = readFileSync(envPath, 'utf-8')
const envVars = {}
envContent.split('\n').forEach((line) => {
  const [key, value] = line.split('=')
  if (key && value) {
    envVars[key.trim()] = value.trim()
  }
})

// Parse command line arguments
const args = process.argv.slice(2)
const options = {
  prompt: '',
  filename: null,
  size: '1024x1024',
  quality: 'standard',
  style: 'natural',
}

// Parse arguments
let i = 0
while (i < args.length) {
  switch (args[i]) {
    case '--filename':
    case '-f':
      options.filename = args[++i]
      break
    case '--size':
    case '-s':
      options.size = args[++i]
      break
    case '--quality':
    case '-q':
      options.quality = args[++i]
      break
    case '--style':
      options.style = args[++i]
      break
    case '--help':
    case '-h':
      console.log(`
Usage: ./generate-image.js [options] <prompt>

Options:
  -f, --filename <name>   Custom filename (without extension)
  -s, --size <size>       Image size: 1024x1024, 1792x1024, 1024x1792 (default: 1024x1024)
  -q, --quality <quality> Image quality: standard, hd (default: standard)
  --style <style>         Image style: vivid, natural (default: natural)
  -h, --help              Show this help message

Example:
  ./generate-image.js -f mountain-sunset -s 1792x1024 -q hd "A beautiful sunset over mountains"
`)
      process.exit(0)
    default:
      // Collect remaining args as prompt
      options.prompt = args.slice(i).join(' ')
      i = args.length
  }
  i++
}

if (!options.prompt) {
  console.error('Error: No prompt provided')
  console.error('Usage: ./generate-image.js [options] <prompt>')
  console.error('Use -h or --help for more information')
  process.exit(1)
}

console.log(`\n🎨 Generating image for prompt: "${options.prompt}"`)
const imagesDir = resolve(
  projectRoot,
  'mcp-servers/dalle-image/generated-images/'
)
console.log(`📁 Images will be saved to: ${imagesDir}`)
if (options.filename) {
  console.log(`📝 Custom filename: ${options.filename}.png`)
}
console.log(
  `📐 Size: ${options.size}, Quality: ${options.quality}, Style: ${options.style}\n`
)

// Path to MCP server
const serverPath = resolve(
  projectRoot,
  'mcp-servers/dalle-image/build/index.js'
)

// Start the MCP server with environment variables
const server = spawn('node', [serverPath], {
  stdio: ['pipe', 'pipe', 'pipe'],
  env: { ...process.env, ...envVars },
})

const rl = createInterface({
  input: server.stdout,
  output: process.stdout,
  terminal: false,
})

// Handle server errors
server.stderr.on('data', (data) => {
  console.error('Server error:', data.toString())
})

// Send initialization
server.stdin.write(
  JSON.stringify({
    jsonrpc: '2.0',
    id: 1,
    method: 'initialize',
    params: {
      protocolVersion: '0.1.0',
      capabilities: {},
    },
  }) + '\n'
)

// Process responses
let initialized = false
rl.on('line', (line) => {
  try {
    const response = JSON.parse(line)

    if (!initialized && response.id === 1) {
      initialized = true
      console.log('✅ Server initialized\n')

      // Send image generation request
      const request = {
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'generate_image',
          arguments: {
            prompt: options.prompt,
            size: options.size,
            quality: options.quality,
            style: options.style,
          },
        },
      }

      console.log('📤 Sending request to DALL-E...\n')
      server.stdin.write(JSON.stringify(request) + '\n')
    }

    if (response.id === 2) {
      if (response.error) {
        console.error('❌ Error:', response.error.message || response.error)
        process.exit(1)
      } else if (response.result) {
        console.log('✅ Image generated successfully!\n')

        // Parse the content array from the response
        const content = response.result.content
        let generatedFilePath = null

        if (Array.isArray(content)) {
          content.forEach((item) => {
            if (item.type === 'text') {
              const lines = item.text.split('\n')
              lines.forEach((line) => {
                if (line.includes('Saved locally:')) {
                  generatedFilePath = line.split('Saved locally:')[1].trim()

                  // If custom filename is provided, rename the file
                  if (options.filename && generatedFilePath) {
                    const oldPath = generatedFilePath
                    const dir = dirname(oldPath)
                    const newPath = join(dir, `${options.filename}.png`)

                    setTimeout(() => {
                      try {
                        renameSync(oldPath, newPath)
                        console.log(`📁 Image saved to: ${newPath}`)
                      } catch (err) {
                        console.error(
                          `❌ Failed to rename file: ${err.message}`
                        )
                        console.log(`📁 Image saved to: ${generatedFilePath}`)
                      }
                    }, 100) // Small delay to ensure file is written
                  } else {
                    console.log(`📁 Image saved to: ${generatedFilePath}`)
                  }
                } else if (line.includes('Image URL:')) {
                  console.log(`🌐 ${line}`)
                }
              })
            }
          })
        }
      }

      // Clean exit with delay for file operations
      setTimeout(() => {
        server.kill()
        process.exit(0)
      }, 500)
    }
  } catch (e) {
    // Ignore non-JSON output
  }
})

// Timeout after 30 seconds
setTimeout(() => {
  console.error('\n❌ Request timed out after 30 seconds')
  server.kill()
  process.exit(1)
}, 30000)
