const users = [
  { id: 1, name: "Vinicius", email: "vinicius_augutis@hotmail.com" },
  { id: 1, name: "Vanessa", email: "vanessa@hotmail.com" },
];

module.exports = {
  Query: {
    users: () => users,
    user: () => users[0],
  },

  Mutation: {
    createUser: () => {},
  },
};
