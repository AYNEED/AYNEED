import { GraphQLScalarType, Kind } from 'graphql';

export const scalarToken = new GraphQLScalarType({
  name: 'Token',
  description: 'Auth token',

  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (ast) => (ast.kind === Kind.STRING ? ast.value : null),
});

export const scalarDateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime string',

  serialize: (value) => value,
  parseValue: (value) => value,
  parseLiteral: (ast) => (ast.kind === Kind.STRING ? ast.value : null),
});
