import express from "express";

const Container = require("typedi").Container;

const router = express.Router();

router.post(
  "/register",
  Container.get("middleware").ensureUserDoesNotExists,
  Container.get("userController").register
);

// Customers
router.post(
  "/register/customer",
  Container.get("middleware").ensureCustomerDoesNotExists,
  Container.get("customerController").register
);

router.post(
  "/login/customer",
  Container.get("middleware").ensureCustomerExists,
  Container.get("middleware").ensurePasswordIsValid,
  Container.get("customerController").login
);

// Products
router.get("/products", Container.get("productController").index);

router.post(
  "/products",
  Container.get("middleware").ensureProductDoesNotExists,
  Container.get("productController").create
);

// Carts
router.post(
  "/carts/products",
  Container.get("middleware").ensureCustomerExists,
  Container.get("middleware").ensureProductRemains,
  Container.get("cartController").create
);

router.get(
  "/carts",
  Container.get("middleware").ensureCustomerExists,
  Container.get("cartController").index
);

export default router;
