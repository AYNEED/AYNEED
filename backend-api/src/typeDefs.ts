import { readFileSync } from 'fs';
import { gql } from 'apollo-server';

const schemaPath = process.cwd().concat('/schema.graphql');
const schemaText = readFileSync(schemaPath, 'utf8');

export const typeDefs = gql(schemaText);
