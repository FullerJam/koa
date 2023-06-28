const Koa = require("koa");
const parser = require("koa-bodyparser");
const cors = require("@koa/cors");
const App = new Koa();
const port = 8000;

App.use(parser())
  .use(cors())
  .listen(port, () => {
    console.log(`Server 👂 http://127.0.0.1:${port}/`);
  });
