const { GraphQLServer } = require('graphql-yoga');

const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`;

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
};

const graphQLServer = new GraphQLServer({ typeDefs, resolvers });
const express = graphQLServer.createHttpServer({
  cors: true,
}).express;

module.exports = express;
