import express from "express";

const Container = require("typedi").Container;

const router = express.Router();

router.post(
  "/register",
  Container.get("middleware").ensureUserDoesNotExists,
  Container.get("userController").register
);

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

export default router;
