const { GraphQLServer } = require('graphql-yoga');
const { typeDefs } = require('./typeDefs');
const { queries } = require('./queries');

const resolvers = {
  Query: queries,
};

const graphQLServer = new GraphQLServer({ typeDefs, resolvers });
graphQLServer.createHttpServer({
  cors: true,
});
module.exports = graphQLServer.express;
