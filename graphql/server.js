const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolversArray = loadFilesSync(path.join(__dirname, '**/resolvers.js'));

async function startApolloServer() {
  const app = express();

  const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolversArray,
  });

  const server = new ApolloServer({ schema });

  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
  const port = 3000;
  app.listen(port, () => { 
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
    // console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`)
  });
}

startApolloServer();