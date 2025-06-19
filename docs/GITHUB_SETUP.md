# GitHub Integration Setup

## Required GitHub Secrets

To enable automatic deployments, add these secrets to your GitHub repository:

### 1. Get Vercel Token
```bash
# In your terminal
vercel login
vercel whoami --token
```
Copy the token that appears.

### 2. Get Project IDs
```bash
# In your project directory
vercel link
cat .vercel/project.json
```

You'll see:
```json
{
  "orgId": "team_xxxxx",
  "projectId": "prj_xxxxx"
}
```

### 3. Add to GitHub
1. Go to GitHub repo > Settings > Secrets and variables > Actions
2. Add these secrets:
   - `VERCEL_TOKEN`: Your personal Vercel token
   - `VERCEL_ORG_ID`: The orgId from project.json
   - `VERCEL_PROJECT_ID`: The projectId from project.json

## Workflow Features

### Automatic Deployments
- **Main branch**: Deploys to production
- **Pull requests**: Creates preview deployments
- **Comments**: Adds preview URL to PRs

### Quality Checks
Before deploying, runs:
1. TypeScript type checking
2. ESLint
3. Tests
4. Build verification

### E2E Tests
After deployment, runs E2E tests against the live URL.

## Monitoring Deployments

### GitHub Actions
- Go to Actions tab in GitHub
- View deployment logs
- Re-run failed deployments

### Vercel Dashboard
- See all deployments
- View build logs
- Monitor performance

## Troubleshooting

### Secret Errors
If you see "Error: Missing required environment variables":
1. Verify all secrets are added
2. Check secret names match exactly
3. Re-run the workflow

### Build Failures
1. Check GitHub Actions logs
2. Run `npm run build` locally
3. Ensure all dependencies are in package.json

### Permission Errors
Ensure your Vercel token has:
- Access to the organization
- Deploy permissions
- Project access