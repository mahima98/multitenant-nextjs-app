// const next = require("next");
// const express = require("express");
// const vhost = require("vhost");

// const port = process.env.PORT || 5000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const mainServer = express();
//   const website_2_Server = express();
//   const website_1_Server = express();

//   website_2_Server.get("/", (req, res) => {
//     return app.render(req, res, "/website_2", req.query);
//   });

//   website_2_Server.get("/*", (req, res) => {
//     return app.render(req, res, `/website_2${req.path}`, req.query);
//   });

//   website_2_Server.all("*", (req, res) => {
//     return handle(req, res);
//   });

//   website_1_Server.get("/", (req, res) => {
//     return app.render(req, res, "/website_1", req.query);
//   });

//   website_1_Server.get("/*", (req, res) => {
//     console.log("nested");
//     console.group("nested");
//     console.log({ req });
//     console.log({ res });
//     console.groupEnd();
//     return app.render(req, res, `/website_1${req.path}`, req.query);
//   });

//   website_1_Server.all("*", (req, res) => {
//     console.log("all");
//     return handle(req, res);
//   });

//   mainServer.use(vhost("website_2.lvh.me", website_2_Server));
//   mainServer.use(vhost("lvh.me", website_1_Server));
//   mainServer.use(vhost("www.lvh.me", website_1_Server));
//   mainServer.listen(port, (err) => {
//     if (err) throw err;
//     console.log(`> Ready on http://lvh.me:${port}`);
//   });
// });
