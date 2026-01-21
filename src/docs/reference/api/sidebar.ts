import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Users",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
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
      label: "Data Sources",
      link: {
        type: "doc",
        id: "reference/api/aicser-platform-api",
      },
      items: [
        {
          type: "doc",
          id: "reference/api/list-data-sources",
          label: "List all data sources",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/create-data-source",
          label: "Create data source",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "reference/api/get-data-source-by-id",
          label: "Get data source by ID",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "reference/api/update-data-source",
          label: "Update data source",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "reference/api/delete-data-source",
          label: "Delete data source",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "reference/api/test-data-source",
          label: "Test data source connection",
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
          id: "reference/api/schemas/datasource",
          label: "DataSource",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/createdatasourcerequest",
          label: "CreateDataSourceRequest",
          className: "schema",
        },
        {
          type: "doc",
          id: "reference/api/schemas/updatedatasourcerequest",
          label: "UpdateDataSourceRequest",
          className: "schema",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
