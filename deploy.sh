#!/bin/bash

echo "🚀 Deploying Explori PWA to Vercel..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Build the app
echo "🔨 Building app..."
npm run build

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
fi

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment complete!"
echo "🎉 Your Explori travel app is now live as a PWA!"
echo ""
echo "Next steps:"
echo "1. Open the Vercel URL on your iPhone/Android"
echo "2. Tap 'Add to Home Screen' in Safari/Chrome"
echo "3. Enjoy your native-like travel discovery app!"