const { cache } = require("./cache");

const randomuserdbCache = (ctx, next) => {
  try {
    if (cache.has("results")) {
      return (ctx.body = {
        results: cache.get("results"),
        message: "retrieved from cache",
      });
    }
    return next();
  } catch (err) {
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  randomuserdbCache,
};
