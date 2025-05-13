/**
  This is auto-generated file.  If any change, make it to graphql/templates/index.ts.ejs
*/

import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import type { IRequestContext } from '../types';
import { EventStore } from './eventstore';

import petstore from '../schema/petstore/data-source';
import helloworld from '../schema/helloworld/data-source';
import bookstore from '../schema/bookstore/data-source';

export const getDataSources = (
    cache: KeyValueCache,
    context: IRequestContext,
  ) => {
    // const conf = {
    //   cache,
    //   context,
    // };
  const evtStore = new EventStore(); 
  return {
    petstoreApi: new petstore(cache, context, evtStore, "petstore"),
    helloworldApi: new helloworld(cache, context, evtStore, "helloworld"),
    bookstoreApi: new bookstore(cache, context, evtStore, "bookstore"),
  }
}