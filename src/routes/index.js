const { Router } = require("express");
const authRouter = require("./auth.route");

const v1Router = Router();

v1Router.use("/auth", authRouter);

module.exports = v1Router;
