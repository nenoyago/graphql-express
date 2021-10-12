import 'reflect-metadata';
import 'dotenv/config';

import '@config/database';

import express, { Request, Response, NextFunction } from 'express';
import 'express-async-errors';

import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import resolvers from '@config/graphql/resolvers';
import typeDefs from '@config/graphql/schemas';

// import { routes } from '@routes';

const app = express();

app.use(express.json());

// app.use(routes);

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error) {
      return response.status(400).json(error.message);
    }

    return response.status(500).json(error);
  }
);

const APP_PORT = process.env.APP_PORT || 3333;

app.listen(APP_PORT, () =>
  console.log(`Server is running on port ${APP_PORT}!`)
);
