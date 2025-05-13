

export class EventStore {
    constructor() {
        // Initialize any necessary properties or dependencies here
    }

    //TODO: to be implemented
    async publishEvent(args, serviceName): Promise<any> {
        console.log(`${serviceName}: EventStore.publishEvent called with args:`, {...args});
    }
    
}
