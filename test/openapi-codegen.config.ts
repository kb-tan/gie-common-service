import {
  generateSchemaTypes,
  generateFetchers,
} from "@openapi-codegen/typescript";
import { defineConfig } from "@openapi-codegen/cli";
export default defineConfig({
  petstore: {
    from: {
      source: "url",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
    outputDir: "client",
    to: async (context) => {
      const filenamePrefix = "petstore";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateFetchers(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
  petstore: {
    from: {
      source: "url",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
    outputDir: "client",
    to: async (context) => {
      const filenamePrefix = "petstore";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateFetchers(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
  petstore: {
    from: {
      source: "url",
      url: "https://petstore3.swagger.io/api/v3/openapi.json",
    },
    outputDir: "client",
    to: async (context) => {
      const filenamePrefix = "petstore";
      const { schemasFiles } = await generateSchemaTypes(context, {
        filenamePrefix,
      });
      await generateFetchers(context, {
        filenamePrefix,
        schemasFiles,
      });
    },
  },
});
