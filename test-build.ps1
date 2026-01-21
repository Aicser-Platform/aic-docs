# Test script to validate documentation build before pushing to GitHub

$ErrorActionPreference = "Stop"

Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "Starting Documentation Build Test" -ForegroundColor Cyan
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Clean previous builds
Write-Host "Step 1: Cleaning previous builds..." -ForegroundColor Yellow
try {
    npm run clear
    Write-Host "✓ Clean successful" -ForegroundColor Green
} catch {
    Write-Host "✗ Clean failed" -ForegroundColor Red
    exit 1
}

# Step 2: Validate OpenAPI spec
Write-Host "`nStep 2: Validating OpenAPI specification..." -ForegroundColor Yellow
if (Test-Path "static/openapi.json") {
    try {
        $json = Get-Content "static/openapi.json" -Raw | ConvertFrom-Json
        Write-Host "✓ OpenAPI spec is valid JSON" -ForegroundColor Green
    } catch {
        Write-Host "✗ OpenAPI spec has invalid JSON" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✗ OpenAPI spec file not found" -ForegroundColor Red
    exit 1
}

# Step 3: Test local build
Write-Host "`nStep 3: Testing production build..." -ForegroundColor Yellow
try {
    npm run build
    Write-Host "✓ Build successful" -ForegroundColor Green
} catch {
    Write-Host "✗ Build failed" -ForegroundColor Red
    exit 1
}

# Step 4: Check build output
Write-Host "`nStep 4: Validating build output..." -ForegroundColor Yellow
if (Test-Path "build") {
    if (Test-Path "build/index.html") {
        Write-Host "✓ Build output exists" -ForegroundColor Green
    } else {
        Write-Host "✗ index.html not found in build" -ForegroundColor Red
        exit 1
    }
} else {
    Write-Host "✗ Build directory not found" -ForegroundColor Red
    exit 1
}

# Step 5: Test Docker build
Write-Host "`nStep 5: Testing Docker build..." -ForegroundColor Yellow
try {
    docker build -f Dockerfile.docs -t aicser-docs-test .
    Write-Host "✓ Docker build successful" -ForegroundColor Green
    
    # Cleanup test Docker image
    docker rmi aicser-docs-test -f | Out-Null
} catch {
    Write-Host "✗ Docker build failed" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host "All tests passed! ✓" -ForegroundColor Green
Write-Host "=====================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "You can safely push to GitHub!" -ForegroundColor Green
