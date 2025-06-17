# Pure Prana Website - GitHub Repository Information

## 📍 Repository Details
- **Repository**: https://github.com/PurePrana/pure-prana-website
- **Owner**: PurePrana
- **Type**: Public repository
- **Created**: December 27, 2024

## 🔗 Quick Links
- **Issues**: https://github.com/PurePrana/pure-prana-website/issues
- **Project Board**: https://github.com/users/PurePrana/projects/2
- **Milestones**: https://github.com/PurePrana/pure-prana-website/milestones

## 🚀 Project Status
- **Total Issues**: 44 (organized by sprints)
- **Sprints**: 4 (Sprint 0-3)
- **Timeline**: 4 weeks total
- **Tech Stack**: Next.js 14, TypeScript, Tailwind CSS

## 🔐 Authentication

### Check Current Login Status
```bash
gh auth status
```

### If Not Logged In
```bash
# Option 1: Interactive login
gh auth login

# Option 2: Login with Personal Access Token
echo "ghp_YOUR_TOKEN_HERE" | gh auth login --with-token

# Option 3: Login with specific scopes for project management
gh auth login --scopes repo,project,workflow
```

### If Authentication Fails
1. Logout first: `gh auth logout`
2. Try login again with the method above
3. For project management, ensure your token has `project` scope

## 📋 Common Commands

### Repository Management
```bash
# Clone the repository
git clone https://github.com/PurePrana/pure-prana-website.git

# View repository info
gh repo view PurePrana/pure-prana-website

# List all issues
gh issue list --repo PurePrana/pure-prana-website
```

### Project Management
```bash
# View project
gh project view 2 --owner PurePrana

# Add issue to project
gh project item-add 2 --owner PurePrana --url https://github.com/PurePrana/pure-prana-website/issues/NUMBER
```

### Working with Issues
```bash
# View specific issue
gh issue view NUMBER --repo PurePrana/pure-prana-website

# Create new issue
gh issue create --repo PurePrana/pure-prana-website

# Close issue
gh issue close NUMBER --repo PurePrana/pure-prana-website
```

## 🏗️ Project Structure

### Sprint 0 - Foundation (Issues #1-9)
- Project setup and configuration
- Design system implementation
- Base components

### Sprint 1 - Core Pages (Issues #10-20)
- Homepage with hero section
- Product showcase pages
- Amazon integration

### Sprint 2 - Content System (Issues #21-31)
- Blog infrastructure
- Educational content
- Search functionality

### Sprint 3 - Polish & Launch (Issues #32-44)
- Performance optimization
- Legal pages
- Final testing

## 🛠️ Development Workflow

1. **Pick an Issue**
   - Go to "Ready for Pickup" column in project board
   - Assign yourself to the issue

2. **Create Branch**
   ```bash
   git checkout -b feature/issue-NUMBER-description
   ```

3. **Make Changes & Commit**
   ```bash
   git add .
   git commit -m "feat: implement issue #NUMBER"
   ```

4. **Push & Create PR**
   ```bash
   git push origin feature/issue-NUMBER-description
   gh pr create --fill
   ```

## 💡 Tips
- Always check `gh auth status` before starting work
- Use issue numbers in commit messages for automatic linking
- Move issues through project board columns as you progress
- Tag PR with appropriate labels

---
Last Updated: December 27, 2024