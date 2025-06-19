#!/bin/bash

# Pure Prana Website Deployment Script
# This script prepares and deploys the website to Vercel

set -e  # Exit on error

echo "🚀 Starting Pure Prana Website Deployment..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Error: Vercel CLI not found. Please install it first:"
    echo "npm i -g vercel"
    exit 1
fi

# Run pre-deployment checks
echo "📋 Running pre-deployment checks..."

# 1. Type checking
echo "🔍 Running TypeScript checks..."
npm run typecheck || { echo "❌ TypeScript errors found. Please fix them before deploying."; exit 1; }

# 2. Linting
echo "🧹 Running linter..."
npm run lint || { echo "❌ Linting errors found. Please fix them before deploying."; exit 1; }

# 3. Build test
echo "🏗️  Testing build..."
npm run build || { echo "❌ Build failed. Please fix errors before deploying."; exit 1; }

# 4. Tests (if they exist)
if npm run | grep -q "test"; then
    echo "🧪 Running tests..."
    npm test || { echo "❌ Tests failed. Please fix them before deploying."; exit 1; }
fi

echo "✅ All checks passed!"

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."

if [ "$1" == "--production" ] || [ "$1" == "-p" ]; then
    echo "📢 Deploying to PRODUCTION..."
    vercel --prod
else
    echo "📢 Deploying preview..."
    vercel
fi

echo "✨ Deployment complete!"