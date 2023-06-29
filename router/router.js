const Router = require("koa-router");
const router = new Router();
const { getTodos, postEvent } = require("./controllers/todo.controllers");

router.get("/todos-list", getTodos);
router.post("/add-todo", postEvent);

module.exports = router;
