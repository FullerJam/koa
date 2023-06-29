const usersRender = ({ results }) => {
  return results.map((user) => {
    const { gender, name, title, first, last } = user;

    return {
      gender,
      name,
      title,
      first,
      last,
    };
  });
};

module.exports = {
  usersRender,
};
