# GitHub Actions CI/CD Configuration

## Overview

This repository includes automated CI/CD pipelines using GitHub Actions for building, testing, and deploying the Aicser Platform documentation.

## Workflows

### 1. CI/CD Pipeline (`.github/workflows/ci-cd.yml`)

Main pipeline that runs on every push and pull request.

**Jobs:**
- **Lint and Test**: Runs linting and tests, builds documentation
- **Docker Build**: Builds production and development Docker images
- **Security Scan**: Scans Docker images for vulnerabilities using Trivy
- **Deploy to GitHub Pages**: Deploys documentation to GitHub Pages
- **Deploy to Production**: Optional production deployment (customize based on infrastructure)
- **Notify**: Sends deployment status notifications

**Triggers:**
- Push to `main`, `master`, or `develop` branches
- Pull requests to `main` or `master`
- Manual workflow dispatch

### 2. Docker Compose Deployment (`.github/workflows/docker-deploy.yml`)

Tests Docker Compose configuration and deployment.

**Jobs:**
- Validates `docker-compose.docs.yml` configuration
- Builds and tests containers locally
- Runs health checks
- Displays logs for debugging

**Triggers:**
- Push to `main` or `master` with changes to Docker files
- Manual workflow dispatch

### 3. Release and Publish (`.github/workflows/release.yml`)

Automated release workflow for version tags.

**Jobs:**
- Creates GitHub releases
- Builds and publishes versioned Docker images
- Pushes to GitHub Container Registry (ghcr.io)

**Triggers:**
- Push of version tags (e.g., `v1.0.0`)
- Manual workflow dispatch

## Required Secrets

Configure these in GitHub repository settings (Settings → Secrets and variables → Actions):

### Optional Secrets (for production deployment):
- `PRODUCTION_HOST`: Production server hostname/IP
- `PRODUCTION_USER`: SSH username
- `SSH_PRIVATE_KEY`: SSH private key for deployment
- `DOCKER_HUB_USERNAME`: Docker Hub username (if using Docker Hub)
- `DOCKER_HUB_TOKEN`: Docker Hub access token

### Automatic Secrets (provided by GitHub):
- `GITHUB_TOKEN`: Automatically available, used for GitHub Container Registry

## GitHub Pages Setup

1. Go to repository Settings → Pages
2. Source: Select "GitHub Actions"
3. The workflow will automatically deploy to GitHub Pages on push to `main`/`master`

## Docker Images

Images are published to GitHub Container Registry (ghcr.io):

```bash
# Production image
docker pull ghcr.io/aicser-platform/aic-docs:latest

# Development image
docker pull ghcr.io/aicser-platform/aic-docs-dev:latest

# Specific version
docker pull ghcr.io/aicser-platform/aic-docs:v1.0.0
```

## Local Testing

Test workflows locally using [act](https://github.com/nektos/act):

```bash
# Install act
# Windows (with Chocolatey)
choco install act-cli

# macOS
brew install act

# Test CI workflow
act -j lint-and-test

# Test Docker build
act -j docker-build
```

## Deployment Strategies

### Option 1: GitHub Pages (Default)
- Automatic deployment on push to `main`/`master`
- Free hosting for public repositories
- URL: `https://aicser-platform.github.io/aic-docs`

### Option 2: Custom Domain with Docker
Uncomment and configure the SSH deployment step in `ci-cd.yml`:

```yaml
- name: Deploy via SSH
  uses: appleboy/ssh-action@master
  with:
    host: ${{ secrets.PRODUCTION_HOST }}
    username: ${{ secrets.PRODUCTION_USER }}
    key: ${{ secrets.SSH_PRIVATE_KEY }}
    script: |
      cd /path/to/deployment
      docker-compose -f docker-compose.docs.yml pull
      docker-compose -f docker-compose.docs.yml up -d --force-recreate
```

### Option 3: Kubernetes Deployment
Add Kubernetes manifests and update the deployment job:

```yaml
- name: Deploy to Kubernetes
  uses: azure/k8s-deploy@v4
  with:
    manifests: |
      k8s/deployment.yml
      k8s/service.yml
    images: ghcr.io/aicser-platform/aic-docs:${{ github.sha }}
```

## Monitoring and Notifications

### Enable Slack Notifications
Add Slack webhook URL as secret and update the notify job:

```yaml
- name: Slack Notification
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

### Enable Email Notifications
GitHub automatically sends email notifications for workflow failures to repository admins.

## Workflow Status Badges

Add to README.md:

```markdown
[![CI/CD Pipeline](https://github.com/Aicser-Platform/aic-docs/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/Aicser-Platform/aic-docs/actions/workflows/ci-cd.yml)
[![Docker Deploy](https://github.com/Aicser-Platform/aic-docs/actions/workflows/docker-deploy.yml/badge.svg)](https://github.com/Aicser-Platform/aic-docs/actions/workflows/docker-deploy.yml)
```

## Troubleshooting

### Build Failures
1. Check workflow logs in Actions tab
2. Verify all required files exist
3. Test Docker builds locally
4. Check Node.js version compatibility

### Permission Errors
1. Ensure `GITHUB_TOKEN` has required permissions
2. Check repository Settings → Actions → General → Workflow permissions
3. Enable "Read and write permissions"

### GitHub Pages Not Updating
1. Verify Pages source is set to "GitHub Actions"
2. Check deployment logs in Actions tab
3. Ensure `build/` directory is generated correctly

## Customization

### Change Node.js Version
Update in `.github/workflows/ci-cd.yml`:
```yaml
env:
  NODE_VERSION: '20'  # Change to desired version
```

### Add Custom Tests
Add scripts to `package.json`:
```json
{
  "scripts": {
    "test": "jest",
    "lint": "eslint src/"
  }
}
```

### Modify Build Steps
Edit the `lint-and-test` job in `ci-cd.yml` to add custom build steps.

## Best Practices

1. **Tag Releases**: Use semantic versioning (v1.0.0) for releases
2. **Test Locally**: Always test Docker builds locally before pushing
3. **Review Logs**: Check workflow logs for warnings and errors
4. **Security**: Keep secrets secure, never commit them to the repository
5. **Documentation**: Update this file when making workflow changes

## Support

For issues with GitHub Actions:
- Check [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Review workflow logs in the Actions tab
- Open an issue in this repository
