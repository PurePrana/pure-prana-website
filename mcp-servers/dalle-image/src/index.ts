#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ErrorCode,
  ListToolsRequestSchema,
  McpError,
} from "@modelcontextprotocol/sdk/types.js";
import OpenAI from "openai";
import * as fs from "fs/promises";
import * as path from "path";
import { fileURLToPath } from "url";
import { config } from "dotenv";

// Load environment variables
config();

// Get directory name in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Ensure API key is set
if (!process.env.OPENAI_API_KEY) {
  console.error("Error: OPENAI_API_KEY environment variable is not set");
  console.error("Please create a .env file with your OpenAI API key");
  process.exit(1);
}

// Create directory for generated images
const IMAGES_DIR = path.join(__dirname, "..", "generated-images");
await fs.mkdir(IMAGES_DIR, { recursive: true });

// Create server instance
const server = new Server(
  {
    name: "dalle-mcp-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Define available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "generate_image",
        description: "Generate an image using DALL-E 3 based on a text prompt",
        inputSchema: {
          type: "object",
          properties: {
            prompt: {
              type: "string",
              description: "A text description of the desired image",
            },
            size: {
              type: "string",
              description: "Size of the image",
              enum: ["1024x1024", "1792x1024", "1024x1792"],
              default: "1024x1024",
            },
            quality: {
              type: "string",
              description: "Quality of the image",
              enum: ["standard", "hd"],
              default: "standard",
            },
            style: {
              type: "string",
              description: "Style of the image",
              enum: ["natural", "vivid"],
              default: "vivid",
            },
          },
          required: ["prompt"],
        },
      },
    ],
  };
});

// Handle tool execution
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  switch (name) {
    case "generate_image": {
      try {
        if (!args) {
          throw new McpError(
            ErrorCode.InvalidParams,
            "No arguments provided"
          );
        }

        const prompt = args.prompt as string;
        const size = (args.size as "1024x1024" | "1792x1024" | "1024x1792") || "1024x1024";
        const quality = (args.quality as "standard" | "hd") || "standard";
        const style = (args.style as "natural" | "vivid") || "vivid";

        console.error(`Generating image with prompt: "${prompt}"`);
        console.error(`Parameters: size=${size}, quality=${quality}, style=${style}`);

        // Call DALL-E API
        const response = await openai.images.generate({
          model: "dall-e-3",
          prompt,
          size,
          quality,
          style,
          n: 1,
        });

        if (!response.data || response.data.length === 0) {
          throw new Error("No image data received from OpenAI");
        }

        const imageUrl = response.data[0].url;
        const revisedPrompt = response.data[0].revised_prompt;

        // Download and save the image
        const imageResponse = await fetch(imageUrl!);
        const buffer = await imageResponse.arrayBuffer();
        
        // Generate filename with timestamp
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const filename = `dalle-${timestamp}.png`;
        const filepath = path.join(IMAGES_DIR, filename);
        
        // Save image to disk
        await fs.writeFile(filepath, Buffer.from(buffer));

        return {
          content: [
            {
              type: "text",
              text: `Image generated successfully!\n\nOriginal prompt: ${prompt}\n\nRevised prompt: ${revisedPrompt}\n\nImage URL: ${imageUrl}\n\nSaved locally: ${filepath}`,
            },
          ],
        };
      } catch (error) {
        console.error("Error generating image:", error);
        
        if (error instanceof Error) {
          throw new McpError(
            ErrorCode.InternalError,
            `Failed to generate image: ${error.message}`
          );
        }
        
        throw new McpError(
          ErrorCode.InternalError,
          "Failed to generate image: Unknown error"
        );
      }
    }

    default:
      throw new McpError(
        ErrorCode.MethodNotFound,
        `Unknown tool: ${name}`
      );
  }
});

// Start the server
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("DALL-E MCP server running on stdio");
  console.error(`Images will be saved to: ${IMAGES_DIR}`);
}

main().catch((error) => {
  console.error("Server error:", error);
  process.exit(1);
});