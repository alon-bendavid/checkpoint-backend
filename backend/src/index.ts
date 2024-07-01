
import 'reflect-metadata';
import db from './db';
import Country from './entities/Country';
import CountryResolver from './resolvers/CountryResolver';
import { In, Like } from 'typeorm';
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';

db.initialize().then(async () => {
  console.log('Database connected successfully');

  const schema = await buildSchema({
    resolvers: [CountryResolver],
  });

  const server = new ApolloServer({
    schema,
  });

  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });

  console.log(`🚀 Server ready at ${url}`);
}).catch(error => {
  console.error('Error during Data Source initialization:', error);
});
