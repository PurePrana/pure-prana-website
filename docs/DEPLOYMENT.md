# Pure Prana Website Deployment Guide

## Quick Start

1. **Install Vercel CLI**

   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**

   ```bash
   vercel login
   ```

3. **Deploy**

   ```bash
   # Preview deployment
   ./scripts/deploy.sh

   # Production deployment
   ./scripts/deploy.sh --production
   ```

## First-Time Setup

### 1. Create Vercel Account

- Go to [vercel.com](https://vercel.com)
- Sign up with GitHub

### 2. Import Project

- Click "Add New Project"
- Select the `pure-prana-website` repository
- Vercel will auto-detect Next.js

### 3. Configure Environment Variables

In Vercel Dashboard > Settings > Environment Variables, add:

```
ADMIN_API_KEY=<generate-secure-key>
ADMIN_EMAIL=purchase.himalayas@gmail.com
```

Generate secure key:

```bash
openssl rand -base64 32
```

### 4. Enable Vercel KV Storage

1. Go to Storage tab in Vercel Dashboard
2. Create new KV database
3. Connect to your project (Vercel auto-configures env vars)

### 5. Configure Custom Domain

1. Go to Domains in project settings
2. Add your domain (e.g., pureprana.com)
3. Update DNS records as instructed

## Deployment Workflow

### Automatic Deployments

- **Production**: Pushes to `main` branch
- **Preview**: Pull requests get preview URLs

### Manual Deployment

```bash
# Deploy preview
vercel

# Deploy to production
vercel --prod
```

## Environment Variables

### Required

- `ADMIN_API_KEY`: Secure key for admin endpoints
- `ADMIN_EMAIL`: Email for notifications

### Auto-configured by Vercel

- `KV_URL`: Vercel KV database URL
- `KV_REST_API_URL`: KV REST API endpoint
- `KV_REST_API_TOKEN`: KV access token
- `KV_REST_API_READ_ONLY_TOKEN`: KV read-only token

## Monitoring

### Build Logs

- View in Vercel Dashboard > Deployments
- Check for build errors or warnings

### Function Logs

- Vercel Dashboard > Functions tab
- Monitor API route performance

### Analytics

- Enable Vercel Analytics for visitor insights
- Monitor Core Web Vitals

## Troubleshooting

### Build Failures

1. Check TypeScript errors: `npm run type-check`
2. Check linting: `npm run lint`
3. Test local build: `npm run build`

### API Issues

1. Verify environment variables are set
2. Check function logs in Vercel Dashboard
3. Test locally with `vercel dev`

### Data Persistence

- In development: Uses local JSON files
- In production: Uses Vercel KV (Redis)
- Data migrates automatically

## Rollback

If issues arise:

1. Go to Vercel Dashboard > Deployments
2. Find last working deployment
3. Click "..." menu > "Promote to Production"

## Cost Optimization

### Free Tier Includes

- 100GB bandwidth/month
- 100 hours build time/month
- Serverless function execution

### To Stay Within Limits

- Use static generation where possible
- Implement caching headers
- Optimize images with Next.js Image

## Security

### Best Practices

- Rotate `ADMIN_API_KEY` regularly
- Use environment variables for secrets
- Enable HTTPS (automatic with Vercel)
- Implement rate limiting (already done)

### Content Security

- Contact form has rate limiting
- Newsletter signup prevents duplicates
- Admin endpoints require authentication
