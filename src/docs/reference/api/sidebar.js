

const sidebar = {
  apisidebar: [
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/signin",
          label: "User login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/signup",
          label: "User registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/signout",
          label: "User logout",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/whoami",
          label: "Get current user",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/refresh-token",
          label: "Refresh access token",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "AI Analytics",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/chat",
          label: "Main chat endpoint",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/analyze-query",
          label: "AI-powered query analysis",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/generate-sql",
          label: "Generate SQL from natural language",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/business-insights",
          label: "Generate business insights",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/integrated-workflow",
          label: "Integrated AI workflow",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/generate-e-charts",
          label: "Generate ECharts configuration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-ai-models",
          label: "Get available AI models",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/ai-health",
          label: "AI service health check",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Data Sources",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/upload-file",
          label: "Upload CSV or Excel file",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/list-files",
          label: "List uploaded files",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/delete-file",
          label: "Delete file",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/api/test-database-connection",
          label: "Test database connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/connect-database",
          label: "Connect to database",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/list-data-sources",
          label: "List all data sources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/get-data-source",
          label: "Get data source details",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/delete-data-source",
          label: "Delete data source",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/api/get-data-source-schema",
          label: "Get database schema",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/test-warehouse-connection",
          label: "Test warehouse connection",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/connect-warehouse",
          label: "Connect to warehouse",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/list-enterprise-connections",
          label: "List enterprise connections",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Charts",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/generate-chart",
          label: "Generate chart from data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/mcp-chart",
          label: "Generate chart using MCP",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/chart-recommendations",
          label: "Get chart recommendations",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/list-charts",
          label: "List all charts",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-chart",
          label: "Create/save chart",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-chart",
          label: "Get chart details",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Dashboards",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/list-project-dashboards",
          label: "List project dashboards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-project-dashboard",
          label: "Create project dashboard",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-project-dashboard",
          label: "Get project dashboard",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/update-project-dashboard",
          label: "Update project dashboard",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/api/delete-project-dashboard",
          label: "Delete project dashboard",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/api/list-global-dashboards",
          label: "List global dashboards",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-global-dashboard",
          label: "Create global dashboard",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-global-dashboard",
          label: "Get global dashboard",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Queries",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/execute-query",
          label: "Execute SQL query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/validate-query",
          label: "Validate SQL query",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/query-history",
          label: "Query history",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/query-data-source",
          label: "Query specific data source",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-data-from-source",
          label: "Get data from source",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Organizations",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/list-organizations",
          label: "List organizations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-organization",
          label: "Create organization",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-organization",
          label: "Get organization",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/update-organization",
          label: "Update organization",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/api/list-projects",
          label: "List projects",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-project",
          label: "Create project",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-project",
          label: "Get project",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/update-project",
          label: "Update project",
          className: "api-method put",
        },
      ],
    },
    {
      type: "category",
      label: "Conversations",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/list-conversations",
          label: "List conversations",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-conversation",
          label: "Create conversation",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-conversation",
          label: "Get conversation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/get-messages",
          label: "Get messages",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/list-assets",
          label: "List saved assets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/save-asset",
          label: "Save asset",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Health",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/platform-health",
          label: "Platform health check",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/data-health",
          label: "Data service health",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/debug-routes",
          label: "List all available routes",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "reference/api/schemas/user",
          label: "User",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/databaseconnection",
          label: "DatabaseConnection",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/datasource",
          label: "DataSource",
          className: "schema",
        },
      ],
    },
  ],
};

module.exports = sidebar.apisidebar;
