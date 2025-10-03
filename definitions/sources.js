// Old project where raw tables live
const oldProject = "project-96b123a3-d2f8-4312-b92";
const dataset = "dataset101";

module.exports = [
  // Customers
  declare({
    name: "customers",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Regions
  declare({
    name: "regions",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Customer regions
  declare({
    name: "customer_regions",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Products
  declare({
    name: "products",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Categories
  declare({
    name: "categories",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Suppliers
  declare({
    name: "suppliers",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Orders
  declare({
    name: "orders",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Order items
  declare({
    name: "order_items",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Payments
  declare({
    name: "payments",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Shipments
  declare({
    name: "shipments",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Returns
  declare({
    name: "returns",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Reviews
  declare({
    name: "reviews",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Inventory
  declare({
    name: "inventory",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),

  // Employees
  declare({
    name: "employees",
    database: oldProject,
    schema: dataset,
    type: "table"
  }),
];
