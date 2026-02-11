#!/bin/bash

# Valentine Proposal Deploy Script

echo "🚀 Deploying Valentine Proposal to Vercel..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
else
    echo "✅ Vercel CLI found. Deploying..."
    
    # Deploy to Vercel
    vercel --prod --yes
    
    echo "🎉 Deployment complete!"
    echo "📱 Your Valentine is live at:"
    vercel ls --scope= Valentine-proposal | head -n 1 | grep -o "Deployment" | awk '{print $1}'
    
    # Get the deployment URL
    DEPLOY_URL=$(vercel ls --scope= Valentine-proposal | head -n 1 | grep -o "Deployment" | awk '{print $2}')
    
    if [ ! -z "$DEPLOY_URL" ]; then
        echo "$DEPLOY_URL"
    else
        echo "❌ Could not retrieve deployment URL"
    fi
    
    echo ""
    echo "💕 Send this link to your Valentine: $DEPLOY_URL"
    echo "🔗 The 'No' button is mathematically impossible to escape!"
fi