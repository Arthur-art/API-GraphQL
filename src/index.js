const {ApolloServer, gql} = require('apollo-server');

const typeDefs = gpl``;
const resolvers = {};

const server = new ApolloServer({typeDefs, resolvers});
server.listen().then(({url}) => console.log(`Server started at ${url}`));