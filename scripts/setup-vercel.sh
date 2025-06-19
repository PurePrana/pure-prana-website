#!/bin/bash

echo "🚀 Setting up Vercel deployment..."

# Check if logged in
if ! vercel whoami &> /dev/null; then
    echo "❌ Please login to Vercel first:"
    echo "Run: vercel login"
    exit 1
fi

echo "✅ Logged in as: $(vercel whoami)"

# Link project
echo "🔗 Linking project to Vercel..."
vercel link --yes

# Check if .vercel/project.json exists
if [ ! -f ".vercel/project.json" ]; then
    echo "❌ Failed to link project"
    exit 1
fi

echo "✅ Project linked successfully!"

# Extract project info
echo "📋 Project information:"
cat .vercel/project.json

# Get token
echo ""
echo "🔑 Your Vercel token (save this for GitHub secrets):"
vercel whoami --token

echo ""
echo "📝 Next steps:"
echo "1. Copy the token above"
echo "2. Copy the orgId and projectId from project.json"
echo "3. Add these as GitHub secrets:"
echo "   - VERCEL_TOKEN"
echo "   - VERCEL_ORG_ID"
echo "   - VERCEL_PROJECT_ID"
echo ""
echo "4. Then push to GitHub to trigger deployment!"