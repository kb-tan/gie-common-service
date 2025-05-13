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
    
    async addPet(args): Promise<any> {
      //TODO: Implement the addPet method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.addPet(args);
      console.log('Datasource: API.addPet called');
      return {};
    }
    async findPetsByStatus(args): Promise<any> {
      //TODO: Implement the findPetsByStatus method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.findPetsByStatus(args);
      console.log('Datasource: API.findPetsByStatus called');
      return {};
    }
    async updatePet(args): Promise<any> {
      //TODO: Implement the updatePet method
      this.evtStore.publishEvent(args, this.serviceName);
      this.api.updatePet(args);
      console.log('Datasource: API.updatePet called');
      return {};
    }
      
}