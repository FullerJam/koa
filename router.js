const Router = require("koa-router");
const router = new Router();
const { getTodos, addTodo } = require("./controllers/todo.controllers");

router.get("/todo-list", getTodos);
router.post("/add-todo", addTodo);

module.exports = router;
