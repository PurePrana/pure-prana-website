# DALL-E MCP Server

An MCP (Model Context Protocol) server that integrates OpenAI's DALL-E 3 image generation capabilities directly into Claude Code.

## Features

- Generate images from text prompts using DALL-E 3
- Support for all DALL-E 3 parameters:
  - **Size**: 1024x1024, 1792x1024, or 1024x1792
  - **Quality**: standard or hd
  - **Style**: natural or vivid
- Automatically saves generated images locally
- Returns both the image URL and local file path

## Installation

The server has already been added to Claude Code. You can verify this by running:

```bash
claude mcp list
```

## Usage

In Claude Code, you can now use the image generation capability. Simply ask Claude to generate an image with your desired prompt. For example:

- "Generate an image of a serene mountain landscape at sunset"
- "Create a vivid illustration of a futuristic city"
- "Make an HD image of a cute robot in natural style"

### Parameters

- **prompt** (required): Text description of the desired image
- **size** (optional): Image dimensions
  - `1024x1024` (default, square)
  - `1792x1024` (landscape)
  - `1024x1792` (portrait)
- **quality** (optional): Image quality
  - `standard` (default)
  - `hd` (higher detail, 2x cost)
- **style** (optional): Image style
  - `vivid` (default, more hyper-real and cinematic)
  - `natural` (more natural, less hyper-real)

## File Structure

```
dalle-image/
├── src/
│   └── index.ts          # Main MCP server implementation
├── build/                # Compiled JavaScript
├── generated-images/     # Saved image files
├── package.json
├── tsconfig.json
├── .env                  # OpenAI API key (not in git)
├── .gitignore
└── README.md
```

## Generated Images

All generated images are saved in the `generated-images/` directory with timestamps in the filename format: `dalle-YYYY-MM-DDTHH-MM-SS-MS.png`

## Development

### Prerequisites

- Node.js 16+
- OpenAI API key

### Build from Source

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run in development mode
npm run dev
```

### Environment Variables

Create a `.env` file with:

```
OPENAI_API_KEY=your-api-key-here
```

## Troubleshooting

### Server not responding
1. Check if the server is listed: `claude mcp list`
2. Verify the OpenAI API key is set correctly in `.env`
3. Check the build output exists in `build/index.js`

### Image generation fails
1. Ensure your OpenAI API key has access to DALL-E 3
2. Check if you have sufficient API credits
3. Verify the prompt doesn't violate OpenAI's content policy

## Security Notes

- The `.env` file containing your API key is gitignored
- Never commit API keys to version control
- Generated images are stored locally and not uploaded anywhere

## License

MIT