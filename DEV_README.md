# Development Setup with Docker Compose

## Quick Start

### First Time Setup
Build and start the development container:
```bash
docker-compose -f docker-compose.dev.yml up --build
```

### Subsequent Runs (No Rebuild Required)
Just start the container - dependencies are already installed:
```bash
docker-compose -f docker-compose.dev.yml up
```

## How It Works

### Hot Reload
- **Content files** (src/, docs/, static/) are mounted as volumes
- Changes are instantly reflected in the browser
- No container restart needed for content updates

### Dependency Management
- **node_modules** is stored in a Docker volume
- Dependencies persist between restarts
- **Only rebuild when**: 
  - package.json changes
  - Adding/removing dependencies

### When to Rebuild
```bash
# Rebuild only when you modify package.json
docker-compose -f docker-compose.dev.yml up --build

# Or rebuild explicitly
docker-compose -f docker-compose.dev.yml build
```

## Common Commands

### Start Development Server
```bash
docker-compose -f docker-compose.dev.yml up
```

### Stop Server
```bash
docker-compose -f docker-compose.dev.yml down
```

### View Logs
```bash
docker-compose -f docker-compose.dev.yml logs -f
```

### Install New Dependencies
1. Add to package.json
2. Rebuild container:
   ```bash
   docker-compose -f docker-compose.dev.yml up --build
   ```

### Clear Cache & Start Fresh
```bash
docker-compose -f docker-compose.dev.yml down -v
docker-compose -f docker-compose.dev.yml up --build
```

## Access

- **Documentation**: http://localhost:3005
- **Hot Reload**: Enabled automatically

## Features

✅ **Hot Reload** - Instant content updates  
✅ **Persistent Dependencies** - No reinstall on restart  
✅ **Fast Startup** - Skip dependency installation  
✅ **Isolated Environment** - Consistent across machines  
✅ **Easy Reset** - Clear volumes to start fresh

## Tips

- Edit files directly on your host machine
- Browser will auto-refresh on save
- Only rebuild when package.json changes
- Use `docker-compose.dev.yml` for development
- Use `docker-compose.docs.yml` for production testing
