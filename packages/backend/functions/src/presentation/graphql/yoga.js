const { GraphQLServer } = require('graphql-yoga');
const { typeDefs } = require('./typeDefs');
const { queries } = require('./queries');
const { context } = require('./context');

const resolvers = {
  Query: queries,
};

const graphQLServer = new GraphQLServer({ typeDefs, resolvers, context });
graphQLServer.createHttpServer({
  cors: true,
});
module.exports = graphQLServer.express;
