// GraphQL.js - The JavaScript reference implementation for GraphQL, a query language for APIs created by Facebook.
// https://graphql.org/
//
import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';

const app = express();
app.use('/graphql', graphqlHTTP({
  schema: Schema,
  graphiql: true,
  pretty: true
}));

app.listen(3000, () => console.log('localhost:3000/graphql'));
