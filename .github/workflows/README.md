# GitHub Actions Workflows

This directory contains GitHub Actions workflows for the Aicser documentation project.

## Active Workflows

### 1. CI - Build and Test (`ci.yml`)
**Trigger**: Push to `main`, `add-ci`, `updateDoc-integrate-api` branches or Pull Requests

**Purpose**: Build and test documentation on every commit

**Steps**:
- Checkout code
- Setup Node.js 20
- Install dependencies
- Generate API docs from OpenAPI spec
- Build documentation
- Verify build output
- Upload build artifact

**Status**: ✅ Active

---

### 2. Deploy to GitHub Pages (`deploy-github-pages.yml`)
**Trigger**: Push to `main` branch or manual trigger

**Purpose**: Deploy documentation to GitHub Pages

**Steps**:
- Build documentation
- Generate API docs
- Deploy to GitHub Pages

**URL**: `https://aicser-platform.github.io/aic-docs/`

**Status**: ✅ Active

---

### 3. Docker CI (`docker-ci.yml`)
**Trigger**: Push to any branch, Pull Requests, or manual trigger

**Purpose**: Test Docker builds and security scanning

**Jobs**:
- **Lint Dockerfiles**: Validate Dockerfile syntax
- **Build and Test**: Build Docker images and test containers
- **Docker Compose Test**: Test docker-compose configuration
- **Security Scan**: Scan images for vulnerabilities using Trivy

**Status**: ✅ Active (optional - for Docker deployments)

---

### 4. Docker Deployment (`docker-deploy.yml`)
**Trigger**: Push to `main`/`master` or manual trigger

**Purpose**: Validate Docker configurations

**Status**: ⚠️ Optional (only if using Docker for deployment)

---

### 5. Release (`release.yml`)
**Trigger**: Version tags (`v*.*.*`) or manual trigger

**Purpose**: Create GitHub releases and publish Docker images

**Status**: ⚠️ Optional (for versioned releases)

---

## Setup Instructions

### For GitHub Pages Deployment

1. **Enable GitHub Pages**:
   - Go to repository **Settings** → **Pages**
   - Source: Select **GitHub Actions**

2. **Required Files**:
   - ✅ `static/openapi.json` - OpenAPI specification
   - ✅ `docusaurus.config.js` - Docusaurus configuration
   - ✅ `package.json` - Node dependencies

3. **First Deployment**:
   ```bash
   git push origin main
   ```
   
   Visit: `https://aicser-platform.github.io/aic-docs/`

### For Docker Deployment (Optional)

1. **Local Testing**:
   ```bash
   docker compose -f docker-compose.docs.yml build
   docker compose -f docker-compose.docs.yml up -d
   ```

2. **CI/CD**: Workflows will automatically test Docker builds

---

## Workflow Configuration

### Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NODE_VERSION` | Node.js version | `20` |
| `NODE_ENV` | Environment mode | `production` |

### Secrets (if needed)

None required for basic GitHub Pages deployment.

For custom deployments, you may need:
- `GH_PAT`: Personal Access Token for deployment
- `DOCKER_USERNAME`: Docker Hub username
- `DOCKER_PASSWORD`: Docker Hub password

---

## Troubleshooting

### Build Fails

**Issue**: `npm ci` fails
**Solution**: 
```bash
# Delete package-lock.json and regenerate
npm install
git add package-lock.json
git commit -m "Update package-lock.json"
```

**Issue**: API docs generation fails
**Solution**: Ensure `static/openapi.json` exists and is valid JSON

### GitHub Pages Not Updating

**Issue**: Deployment succeeds but site doesn't update
**Solution**:
1. Check Actions tab for errors
2. Verify GitHub Pages is enabled
3. Clear browser cache (Ctrl+Shift+R)
4. Wait 2-3 minutes for CDN to update

### Docker Build Fails

**Issue**: Docker build fails in CI
**Solution**:
1. Test locally first
2. Check Dockerfile syntax
3. Verify all files are committed
4. Check docker-compose.yml syntax

---

## Disabling Workflows

To disable a workflow temporarily, add this at the top of the workflow file:

```yaml
# This workflow is disabled
if: false
```

Or rename the file to add `.disabled` extension:
```bash
mv ci.yml ci.yml.disabled
```

---

## Workflow Status

| Workflow | Status | Required |
|----------|--------|----------|
| CI | ✅ Active | Yes |
| Deploy GitHub Pages | ✅ Active | Yes |
| Docker CI | ✅ Active | Optional |
| Docker Deploy | ⚠️ Optional | No |
| Release | ⚠️ Optional | No |

---

## Support

For issues with workflows:
1. Check **Actions** tab in GitHub
2. Review workflow logs for errors
3. Check [GitHub Actions documentation](https://docs.github.com/en/actions)
4. Open an issue in the repository
