
// Note: This is an auto-generated file. If any change, make it to graphql/templates/generator/resolver-generator.ts
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  
  findPetsByStatus: async (parent, args, context) => {
    // TODO: Implement resolver logic for findPetsByStatus
    const { petstoreApi } = context.dataSources;
    console.log("Resolver: findPetsByStatus resolver called");
    petstoreApi.findPetsByStatus(args);
    return null; // Implement your logic here
  },
};

const Mutation: MutationResolvers = {
  
  addPet: async (parent, args, context) => {
    // TODO: Implement resolver logic for addPet
    const { petstoreApi } = context.dataSources;
    console.log("Resolver: addPet resolver called");
    petstoreApi.addPet(args);
    return null; // Implement your logic here
  },
  updatePet: async (parent, args, context) => {
    // TODO: Implement resolver logic for updatePet
    const { petstoreApi } = context.dataSources;
    console.log("Resolver: updatePet resolver called");
    petstoreApi.updatePet(args);
    return null; // Implement your logic here
  },
};

export { Query, Mutation };
