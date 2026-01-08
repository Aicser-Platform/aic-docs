import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "reference/api/aicser-platform-api",
    },
    {
      type: "category",
      label: "Authentication",
      link: {
        type: "doc",
        id: "reference/api/authentication",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/login",
          label: "User Login",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Analytics",
      link: {
        type: "doc",
        id: "reference/api/analytics",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/generate-chart",
          label: "Generate Chart",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "AI Analysis",
      link: {
        type: "doc",
        id: "reference/api/ai-analysis",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/ai-analyze",
          label: "AI Data Analysis",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Schemas",
      items: [
        {
          type: "doc",
          id: "reference/api/schemas/loginrequest",
          label: "LoginRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/tokenresponse",
          label: "TokenResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/chartgenerationrequest",
          label: "ChartGenerationRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/chartresponse",
          label: "ChartResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/aianalysisrequest",
          label: "AIAnalysisRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/aianalysisresponse",
          label: "AIAnalysisResponse",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/error",
          label: "Error",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
