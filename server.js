const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const routes = require("./api/routes");

const dev = process.env.NODE_ENV !== "production";
const app = next({
  dev,
});
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const PORT = process.env.PORT;
  const server = express();
  server.use(
    bodyParser.json({
      limit: "50mb",
    })
  );
  server.use(
    bodyParser.urlencoded({
      limit: "50mb",
      extended: true,
    })
  );

  routes(server);

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
