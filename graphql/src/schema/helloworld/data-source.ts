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
    
    async createHelloworldMessage(args): Promise<any> {
      //TODO: Implement the createHelloworldMessage method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.createHelloworldMessage(args);
      console.log('Datasource: API.createHelloworldMessage called');
      return {};
    }
    async deleteHelloworldMessage(args): Promise<any> {
      //TODO: Implement the deleteHelloworldMessage method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.deleteHelloworldMessage(args);
      console.log('Datasource: API.deleteHelloworldMessage called');
      return {};
    }
    async getHelloworldMessageById(args): Promise<any> {
      //TODO: Implement the getHelloworldMessageById method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.getHelloworldMessageById(args);
      console.log('Datasource: API.getHelloworldMessageById called');
      return {};
    }
    async listHelloworldMessages(args): Promise<any> {
      //TODO: Implement the listHelloworldMessages method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.listHelloworldMessages(args);
      console.log('Datasource: API.listHelloworldMessages called');
      return {};
    }
    async updateHelloworldMessage(args): Promise<any> {
      //TODO: Implement the updateHelloworldMessage method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.updateHelloworldMessage(args);
      console.log('Datasource: API.updateHelloworldMessage called');
      return {};
    }
      
}