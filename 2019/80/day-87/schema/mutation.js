import { GraphQLObjectType, GraphQLString } from 'graphql';
import { userType, notebookType } from './types';
import { resolveCreateNote, resolveCreateUser } from './resolver';

const Mutation = new GraphQLObjectType({
  name: 'RootMutationType',
  fields: {
    createUser: {
      type: userType,
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        }
      },
      resolve: resolveCreateUser
    },
    createNote: {
      type: notebookType,
      args: {
        name: {
          name: 'name',
          type: GraphQLString
        },
        note: {
          name: 'note',
          type: GraphQLString
        }
      },
      resolve: resolveCreateNote
    }
  }
});

export default Mutation;
