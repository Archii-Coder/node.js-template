const { Router } = require("express");
const authRouter = require("./auth.route");
const {
  publicPath,
  privatePath,
  adminPath,
} = require("../controllers/test.controller");
const authGuardMiddleware = require("../middleware/authGuard.middleware");
const roleGuardMiddleware = require("../middleware/roleGuard.middleware");

const v1Router = Router();

v1Router.use("/auth", authRouter);

v1Router.get("/public", publicPath);
v1Router.get("/private", authGuardMiddleware, privatePath);
v1Router.get(
  "/admin",
  authGuardMiddleware,
  roleGuardMiddleware("admin"),
  adminPath
);

module.exports = v1Router;
