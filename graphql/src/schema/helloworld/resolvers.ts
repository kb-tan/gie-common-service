
// Note: This is an auto-generated file. If any change, make it to graphql/templates/generator/resolver-generator.ts
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  
  getHelloworldMessageById: async (parent, args, context) => {
    // TODO: Implement resolver logic for getHelloworldMessageById
    const { helloworldApi } = context.dataSources;
    console.log("getHelloworldMessageById resolver called");
    helloworldApi.getHelloworldMessageById(args);
    return null; // Implement your logic here
  },
  listHelloworldMessages: async (parent, args, context) => {
    // TODO: Implement resolver logic for listHelloworldMessages
    const { helloworldApi } = context.dataSources;
    console.log("listHelloworldMessages resolver called");
    helloworldApi.listHelloworldMessages(args);
    return null; // Implement your logic here
  },
};

const Mutation: MutationResolvers = {
  
  createHelloworldMessage: async (parent, args, context) => {
    // TODO: Implement resolver logic for createHelloworldMessage
    const { helloworldApi } = context.dataSources;
    console.log("createHelloworldMessage resolver called");
    helloworldApi.createHelloworldMessage(args);
    return null; // Implement your logic here
  },
  updateHelloworldMessage: async (parent, args, context) => {
    // TODO: Implement resolver logic for updateHelloworldMessage
    const { helloworldApi } = context.dataSources;
    console.log("updateHelloworldMessage resolver called");
    helloworldApi.updateHelloworldMessage(args);
    return null; // Implement your logic here
  },
};

export { Query, Mutation };
