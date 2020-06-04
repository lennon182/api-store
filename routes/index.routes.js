const { Router } = require("express");

const r = Router();

// Index
const { index } = require("./../controllers/index.controller");
r.get("/", index);

// Categories
const {
  addCategory,
  getCategories,
  getOneCategory,
  removeCategory,
} = require("./../controllers/category.controller");
r.post("/categorias", addCategory)
  .get("/categorias", getCategories)
  .get("/categorias/:id", getOneCategory)
  .delete("/categorias/:id", removeCategory);

// Users
const {
  addUser,
  getUsers,
  getOneUser,
  removeUser,
} = require("./../controllers/user.controller");
r.post("/usuarios", addUser)
  .get("/usuarios", getUsers)
  .get("/usuarios/:id", getOneUser)
  .delete("/usuarios/:id", removeUser);

// Sellers
const {
  addSeller,
  getSellers,
  getOneSeller,
  removeSeller,
} = require("./../controllers/seller.controller");
r.post("/vendedores", addSeller)
  .get("/vendedores", getSellers)
  .get("/vendedores/:id", getOneSeller)
  .delete("/vendedores/:id", removeSeller);

// Customer
const {
  addCustomer,
  getCustomers,
  getOneCustomer,
  removeCustomer,
} = require("./../controllers/customer.controller");
r.post("/clientes", addCustomer)
  .get("/clientes", getCustomers)
  .get("/clientes/:id", getOneCustomer)
  .delete("/clientes/:id", removeCustomer);

// Products
const {
  addProduct,
  getProducts,
  getOneProduct,
  removeProduct,
} = require("./../controllers/products.controller");
r.post("/productos", addProduct)
  .get("/productos", getProducts)
  .get("/productos/:id", getOneProduct)
  .delete("/productos/:id", removeProduct);

// Orders
const {
  addOrder,
  getOrders,
  getOneOrder,
  removeOrder,
} = require("./../controllers/orders.controller");
r.post("/pedidos", addOrder)
  .get("/pedidos", getOrders)
  .get("/pedidos/:id", getOneOrder)
  .delete("/pedidos/:id", removeOrder);
module.exports = r;
