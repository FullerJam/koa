const Router = require("koa-router");
const router = new Router();
const { getTodos, addTodo } = require("./controllers/todo.controllers");
const { randomuserdbCache } = require("./middleware/randomuserdb.cache");
const { getUserList } = require("./controllers/users.controllers");

router.get("/users-list", randomuserdbCache, getUserList);
router.get("/todos-list", getTodos);
router.post("/add-todo", addTodo);

module.exports = router;
