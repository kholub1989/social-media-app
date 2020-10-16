const postsResolvers = require("./post");
const userResolvers = require("./users");

module.exports = {
  Query: {
    ...postsResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
};
