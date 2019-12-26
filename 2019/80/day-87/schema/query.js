import { GraphQLObjectType, GraphQLString, GraphQLList } from 'graphql';
import { usersType, userType } from './types';
import { resolveUsers, resolveUser } from './resolver';

const Query = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    users: {
      type: new GraphQLList(usersType),
      resolve: resolveUsers
    },
    user: {
      type: new GraphQLList(userType),
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: resolveUser
    }
  }
});

export default Query;
