/**
  This is auto-generated file.  If any change, make it to templates/types.ts.ejs
*/

import type petstoreApi from './schema/petstore/data-source';
import type helloworldApi from './schema/helloworld/data-source';
import type bookstoreApi from './schema/bookstore/data-source';


export interface IDataSources {
  petstoreApi: petstoreApi;
  helloworldApi: helloworldApi;
  bookstoreApi: bookstoreApi;
}

export type IRequestContext = {
}

export type Context = {
  dataSources: IDataSources;
};