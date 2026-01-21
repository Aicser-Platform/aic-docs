#!/bin/bash
# Test script to validate documentation build before pushing to GitHub

set -e  # Exit on error

echo "====================================="
echo "Starting Documentation Build Test"
echo "====================================="

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Step 1: Clean previous builds
echo -e "${YELLOW}Step 1: Cleaning previous builds...${NC}"
npm run clear
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Clean successful${NC}"
else
    echo -e "${RED}✗ Clean failed${NC}"
    exit 1
fi

# Step 2: Validate OpenAPI spec
echo -e "${YELLOW}Step 2: Validating OpenAPI specification...${NC}"
if [ -f "static/openapi.json" ]; then
    # Check if it's valid JSON
    if python -m json.tool static/openapi.json > /dev/null 2>&1; then
        echo -e "${GREEN}✓ OpenAPI spec is valid JSON${NC}"
    else
        echo -e "${RED}✗ OpenAPI spec has invalid JSON${NC}"
        exit 1
    fi
else
    echo -e "${RED}✗ OpenAPI spec file not found${NC}"
    exit 1
fi

# Step 3: Test local build
echo -e "${YELLOW}Step 3: Testing production build...${NC}"
npm run build
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi

# Step 4: Check build output
echo -e "${YELLOW}Step 4: Validating build output...${NC}"
if [ -d "build" ]; then
    if [ -f "build/index.html" ]; then
        echo -e "${GREEN}✓ Build output exists${NC}"
    else
        echo -e "${RED}✗ index.html not found in build${NC}"
        exit 1
    fi
else
    echo -e "${RED}✗ Build directory not found${NC}"
    exit 1
fi

# Step 5: Test Docker build
echo -e "${YELLOW}Step 5: Testing Docker build...${NC}"
docker build -f Dockerfile.docs -t aicser-docs-test .
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Docker build successful${NC}"
else
    echo -e "${RED}✗ Docker build failed${NC}"
    exit 1
fi

# Cleanup test Docker image
docker rmi aicser-docs-test > /dev/null 2>&1

echo ""
echo "====================================="
echo -e "${GREEN}All tests passed! ✓${NC}"
echo "====================================="
echo ""
echo "You can safely push to GitHub!"
