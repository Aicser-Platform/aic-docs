#!/usr/bin/env node

/**
 * Fetch OpenAPI specification from FastAPI backend
 * and save it to static/openapi.json
 */

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

// Configuration
const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8000/docs/json';
const OUTPUT_PATH = path.join(__dirname, '..', 'static', 'openapi.json');

console.log('🔍 Fetching OpenAPI specification...');
console.log(`   Source: ${BACKEND_URL}`);
console.log(`   Target: ${OUTPUT_PATH}`);

// Choose http or https based on URL
const client = BACKEND_URL.startsWith('https') ? https : http;

client.get(BACKEND_URL, (res) => {
  let data = '';

  if (res.statusCode !== 200) {
    console.error(`❌ Failed to fetch OpenAPI spec: HTTP ${res.statusCode}`);
    process.exit(1);
  }

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    try {
      // Validate JSON
      const spec = JSON.parse(data);
      
      // Ensure static directory exists
      const staticDir = path.dirname(OUTPUT_PATH);
      if (!fs.existsSync(staticDir)) {
        fs.mkdirSync(staticDir, { recursive: true });
      }

      // Write to file with pretty formatting
      fs.writeFileSync(OUTPUT_PATH, JSON.stringify(spec, null, 2));
      
      console.log('✅ OpenAPI specification downloaded successfully!');
      console.log(`   Title: ${spec.info?.title || 'N/A'}`);
      console.log(`   Version: ${spec.info?.version || 'N/A'}`);
      console.log(`   Paths: ${Object.keys(spec.paths || {}).length}`);
    } catch (error) {
      console.error('❌ Failed to parse or save OpenAPI spec:', error.message);
      process.exit(1);
    }
  });

}).on('error', (error) => {
  console.error('❌ Error fetching OpenAPI spec:', error.message);
  console.error('\n💡 Make sure your FastAPI backend is running at:', BACKEND_URL);
  console.error('   You can set BACKEND_URL environment variable to use a different URL');
  process.exit(1);
});
