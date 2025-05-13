import * as path from 'path';

import { loadFilesSync } from '@graphql-tools/load-files';
import { mergeTypeDefs } from '@graphql-tools/merge';
import type { DocumentNode } from 'graphql';
export const typeDefs: DocumentNode = mergeTypeDefs(
  loadFilesSync<DocumentNode>(path.join(__dirname, '../**/*.graphql')),
);
