const fs = require('fs')
const path = require('path')

// Read all MDX files from content/blog directory
const blogDir = path.join(process.cwd(), 'content/blog')
const files = fs.readdirSync(blogDir).filter((file) => file.endsWith('.mdx'))

console.log('Found blog posts:')
console.log('================\n')

const blogLinks = files.map((file) => {
  const slug = file.replace('.mdx', '')
  const link = `http://localhost:3000/blog/${slug}`
  return { file, slug, link }
})

// Print all blog links
blogLinks.forEach(({ file, link }) => {
  console.log(`📄 ${file}`)
  console.log(`🔗 ${link}`)
  console.log('')
})

console.log(`\nTotal blog posts: ${blogLinks.length}`)

// Test each link
console.log('\nTesting blog links...')
console.log('====================\n')

const testLink = async (link, file) => {
  try {
    const response = await fetch(link)
    const status = response.status
    const statusText = response.statusText

    if (status === 200) {
      // Check if response contains error
      const text = await response.text()
      if (text.includes('Error:') || text.includes('PremiumTeaser')) {
        console.log(`❌ ${file}: Contains error`)
        return false
      }
      console.log(`✅ ${file}: OK (${status})`)
      return true
    } else {
      console.log(`❌ ${file}: ${status} ${statusText}`)
      return false
    }
  } catch (error) {
    console.log(`❌ ${file}: Failed to fetch - ${error.message}`)
    return false
  }
}

// Run tests
;(async () => {
  let successCount = 0
  let failCount = 0

  for (const { link, file } of blogLinks) {
    const success = await testLink(link, file)
    if (success) {
      successCount++
    } else {
      failCount++
    }
    // Small delay to avoid overwhelming the server
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  console.log('\n📊 Summary:')
  console.log(`✅ Successful: ${successCount}`)
  console.log(`❌ Failed: ${failCount}`)
  console.log(`📄 Total: ${blogLinks.length}`)
})()
