const { usersRender } = require("../helpers/randomuserdb.helpers");
const { getRequest } = require("./request.services");

const getUsersData = async () => {
  try {
    const resData = await getRequest("https://randomuser.me/api/?results=5");

    return usersRender(resData);
  } catch (err) {
    console.log(err);
    throw err;
  }
};

module.exports = {
  getUsersData,
};
