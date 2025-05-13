/**
  This is auto-generated file.  If any change, make it to graphql/templates/schema/data-source.ts.ejs
*/
import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import type { IRequestContext } from '../../types';
import * as api from './generated';
import { EventStore } from 'src/data-source/eventstore';

export default class API {
    private evtStore: EventStore; 
    private api: api.DefaultApi;
    private serviceName: string;
    constructor(cache: KeyValueCache, context: IRequestContext, evtStore: EventStore, serviceName: string) {
      this.evtStore = evtStore;
      this.api = new api.DefaultApi();
      this.serviceName = serviceName;
    }
    
    async addBook(args): Promise<any> {
      //TODO: Implement the addBook method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.addBook(args);
      console.log('Datasource: API.addBook called');
      return {};
    }
    async deleteBook(args): Promise<any> {
      //TODO: Implement the deleteBook method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.deleteBook(args);
      console.log('Datasource: API.deleteBook called');
      return {};
    }
    async getBook(args): Promise<any> {
      //TODO: Implement the getBook method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.getBook(args);
      console.log('Datasource: API.getBook called');
      return {};
    }
    async listBooks(args): Promise<any> {
      //TODO: Implement the listBooks method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.listBooks(args);
      console.log('Datasource: API.listBooks called');
      return {};
    }
      
}