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
          label: "User login",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/refresh-token",
          label: "Refresh access token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/logout",
          label: "User logout",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "reference/api/users",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/list-users",
          label: "List all users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-user",
          label: "Create a new user",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-user-by-id",
          label: "Get user by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/update-user",
          label: "Update user",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/api/delete-user",
          label: "Delete user",
          className: "api-method delete",
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
          label: "Generate analytics chart",
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
          label: "AI data analysis",
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
          id: "reference/api/schemas/refreshtokenrequest",
          label: "RefreshTokenRequest",
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
          id: "reference/api/schemas/user",
          label: "User",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/createuserrequest",
          label: "CreateUserRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/updateuserrequest",
          label: "UpdateUserRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/userlistresponse",
          label: "UserListResponse",
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
        {
          type: "doc",
          id: "reference/api/schemas/validationerror",
          label: "ValidationError",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
