
// Note: This is an auto-generated file. If any change, make it to graphql/templates/generator/resolver-generator.ts
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  
  getBook: async (parent, args, context) => {
    // TODO: Implement resolver logic for getBook
    const { bookstoreApi } = context.dataSources;
    console.log("getBook resolver called");
    bookstoreApi.getBook(args);
    return null; // Implement your logic here
  },
  listBooks: async (parent, args, context) => {
    // TODO: Implement resolver logic for listBooks
    const { bookstoreApi } = context.dataSources;
    console.log("listBooks resolver called");
    bookstoreApi.listBooks(args);
    return null; // Implement your logic here
  },
};

const Mutation: MutationResolvers = {
  
  addBook: async (parent, args, context) => {
    // TODO: Implement resolver logic for addBook
    const { bookstoreApi } = context.dataSources;
    console.log("addBook resolver called");
    bookstoreApi.addBook(args);
    return null; // Implement your logic here
  },
};

export { Query, Mutation };
