const router = require("express").Router();
const marketplace = require("./marketplace");
const categories = require("./categories");


module.exports = (app) => {
  router.use("/items", marketplace);
  router.use("/categories", categories);

  app.use("/api", router);

  return app;
};