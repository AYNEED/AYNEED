import { GraphQLScalarType, Kind } from 'graphql';

export const scalarDateTime = new GraphQLScalarType({
  name: 'DateTime',
  description: 'DateTime string',

  serialize: (value) => value,
  parseValue: (value) => value,

  parseLiteral: (ast) => (ast.kind === Kind.STRING ? ast.value : null),
});
