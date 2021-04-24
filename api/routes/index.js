const router = require("express").Router();
const marketplace = require("./marketplace");

module.exports = (app) => {
  router.use("/items", marketplace);

  app.use("/api", router);

  return app;
};
