// sidebars.js — Clean version with only existing content
// Only includes files that actually exist in the src/docs directory
const apiSidebar = require('./src/docs/reference/api/sidebar.ts').default;

const sidebars = {
  docs: [
    // Main Homepage
    'index',

    // Getting Started
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      customProps: {
        icon: 'Rocket'
      },
      items: [
        'getting-started/getting-started',
        'getting-started/quick-start-docker',
        'getting-started/first-chart',
        'getting-started/demo-walkthrough',
        'getting-started/faq'
      ]
    },

    // Self-Host
    {
      type: 'category',
      label: 'Self-Host & Enterprise',
      customProps: {
        icon: 'Home'
      },
      items: [
        'self-host/self-host-index',
        'self-host/docker-compose',
      ]
    },

    // Features
    {
      type: 'category',
      label: 'Features',
      customProps: {
        icon: 'Sparkles'
      },
      items: [
        'features/features',
        'features/ai-overview',
        'features/charts-overview',
        'features/data-sources-overview',
      ]
    },

    // Security
    {
      type: 'category',
      label: 'Security',
      collapsed: true,
      customProps: {
        icon: 'Shield'
      },
      items: [
        'security/security-overview'
      ]
    },

    // Performance
    {
      type: 'category',
      label: 'Performance',
      collapsed: true,
      customProps: {
        icon: 'Zap'
      },
      items: [
        'performance/performance-overview'
      ]
    },

    // Developer
    {
      type: 'category',
      label: 'Developer',
      collapsed: true,
      customProps: {
        icon: 'Code'
      },
      items: [
        'developer/developer-index',
      ]
    },

    // Community
    {
      type: 'category',
      label: 'Community',
      collapsed: true,
      customProps: {
        icon: 'Users'
      },
      items: [
        'community/community-index',
      ]
    },

    // Troubleshooting
    {
      type: 'category',
      label: 'Troubleshooting',
      collapsed: true,
      customProps: {
        icon: 'Wrench'
      },
      items: [
        'troubleshooting/troubleshooting-overview'  // File: troubleshooting/index.md with id: troubleshooting-overview
      ]
    }
  ],

  // API Reference Sidebar - Auto-generated from OpenAPI spec
  reference: [
    {
      type: 'doc',
      id: 'reference/api-reference',
      label: 'API Overview',
    },
    ...apiSidebar,
  ],
};

module.exports = sidebars;
