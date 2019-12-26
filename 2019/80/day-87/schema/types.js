import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} from 'graphql';

export const usersType = new GraphQLObjectType({
  name: 'Users',
  description: 'usuários',
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'nome do usuário',
    },
  })
});

export const userType = new GraphQLObjectType({
  name: 'User',
  description: 'um usuário',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'id de usuário',
    },
    name: {
      type: GraphQLString,
      description: 'nome do usuário',
    },
    notebook: {
      type: new GraphQLList(notebookType),
      description: 'caderno do usuário'
    }
  })
});

export const notebookType = new GraphQLObjectType({
  name: 'Notebook',
  description: 'um caderno',
  fields: () => ({
    createdAt: {
      type: GraphQLInt,
      description: 'momento de criação'
    },
    note: {
      type: GraphQLString,
      description: 'nota do caderno'
    }
  })
});
