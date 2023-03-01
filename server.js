const next = require("next");
const express = require("express");
const vhost = require("vhost");

const port = process.env.PORT || 5000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const mainServer = express();
  const adminServer = express();
  const homepageServer = express();

  adminServer.get("/", (req, res) => {
    return app.render(req, res, "/admin", req.query);
  });

  adminServer.get("/*", (req, res) => {
    return app.render(req, res, `/admin${req.path}`, req.query);
  });

  adminServer.all("*", (req, res) => {
    return handle(req, res);
  });

  homepageServer.get("/", (req, res) => {
    return app.render(req, res, "/homepage", req.query);
  });

  homepageServer.get("/*", (req, res) => {
    return app.render(req, res, `/homepage${req.path}`, req.query);
  });

  homepageServer.all("*", (req, res) => {
    return handle(req, res);
  });

  mainServer.use(vhost("admin.lvh.me", adminServer));
  mainServer.use(vhost("lvh.me", homepageServer));
  mainServer.use(vhost("www.lvh.me", homepageServer));
  mainServer.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://lvh.me:${port}`);
  });
});
