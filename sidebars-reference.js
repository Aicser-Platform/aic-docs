const apiSidebar = require('./src/docs/reference/api/sidebar.ts');

const sidebars = {
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