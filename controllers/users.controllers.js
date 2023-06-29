const { cache } = require("../middleware/cache");
const { getUsersData } = require("../services/randomuser.services");

const getUserList = async (ctx) => {
  try {
    const resData = await getUsersData();
    cache.set("results", resData);
    ctx.body = resData;
    ctx.status = 200;
  } catch (err) {
    ctx.body = "Error!";
    ctx.status = 500;
    console.log(err);
    throw err;
  }
};

module.exports = {
  getUserList,
};
