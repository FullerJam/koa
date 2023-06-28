const todo_db = [];

const getTodos = (ctx) => {
  ctx.body = todo_db;
  ctx.status = 200;
};

const addTodo = (ctx) => {
  todo_db.push(ctx.request.body);
  ctx.body = "Todo listed!";
  ctx.status = 201;
};

module.exports = {
  getTodos,
  addTodo,
};
