
const fs = require('fs');
const path = require('path');
import * as fse from 'fs-extra';
import * as ejs from 'ejs';

function getParentFolder(filePath: string): string | null {
  // Resolve the directory name
  const dirName = path.dirname(filePath);

  // Split the directory path into its segments
  const segments = dirName.split(path.sep);

  // If there are segments, the foldername is the last segment
  if (segments.length > 0) {
    return segments[segments.length - 1];
  }

  return null; 
}

function generateResolverTemplate(typeDefsContent, outputPath, service) {
  // const typeDefsContent = fs.readFileSync(typeDefsPath, 'utf-8');
  
  // Regex pattern updated to target QueryResolvers and MutationResolvers definitions accurately
  const resolverTypesPattern = /export\s+type\s+(Query|Mutation)Resolvers<ContextType[^\{]+\{([^}]+)\}/gs;

  // Capturing matches for both QueryResolvers and MutationResolvers
  // TODO: move the ejs into a template 
  const resolverMatches = [...typeDefsContent.matchAll(resolverTypesPattern)];

  let queryResolverTemplates = '';
  let mutationResolverTemplates = '';

  resolverMatches.forEach(match => {
    const typeName = match[1];
    console.log(`Processing ${typeName}Resolvers`);
    const resolversBlock = match[2].trim();

    const resolverLines = resolversBlock.split(';').map(line => line.trim()).filter(Boolean);

    resolverLines.forEach(line => {
      if (!line) return;
      // Remove the '?' from the resolver name
      const [name] = line.split(':');
      const cleanName = name.replace('?', '').trim();  // Remove '?' and trim spaces

      const template = `
  ${cleanName}: async (parent, args, context) => {
    // TODO: Implement resolver logic for ${cleanName}
    const { ${service}Api } = context.dataSources;
    console.log("Resolver: ${cleanName} resolver called");
    ${service}Api.${cleanName}(args);
    return null; // Implement your logic here
  },`;

      // Append to corresponding resolver type
      if (typeName === 'Query') {
        queryResolverTemplates += template;
      } else if (typeName === 'Mutation') {
        mutationResolverTemplates += template;
      }
    });
  });

  if (queryResolverTemplates || mutationResolverTemplates) {
    const templateContent = `
// Note: This is an auto-generated file. If any change, make it to graphql/templates/generator/resolver-generator.ts
import { QueryResolvers, MutationResolvers } from "../generated/graphql";

const Query: QueryResolvers = {
  ${queryResolverTemplates}
};

const Mutation: MutationResolvers = {
  ${mutationResolverTemplates}
};

export { Query, Mutation };
`;

    fs.writeFileSync(outputPath, templateContent);
    console.log(`Generated resolver template at ${outputPath}`);
  } else {
    console.error('Error: Could not find resolver types');
  }
}

const { generate } = require('@graphql-codegen/cli');

async function graphqlCodeGen(schemaPath) {
  try {
    const [{content}]= await generate(
      {
        schema: schemaPath,  // Specify your schema file or endpoint
        generates: {
          //[path.join(schemaDir, 'graphql.ts.tmp')]: {
          ['/dev/null']: {
            "config": {
              "scalars": {
                "ID": "string",
                "TransactionID": "string"
              },
              "namingConvention": "change-case-all#pascalCase"
            },
            "plugins": [
              {
                "typescript-resolvers": {
                  "contextType": "../../types#Context"
                }
              }
            ]
          }
        }
      },
      true // Boolean indicating if the script should output logs
    );
    return content;
  } catch (error) {
    console.error('Error during code generation:', error);
  }
}


const generateMainResolver = ({ resolvers, output }) => { 
  const templateFile = path.join(__dirname, '../resolvers.ts.ejs');
  console.log('*******');
  console.log(resolvers);
  ejs.renderFile(templateFile, { resolvers },
    {},
    (err, str) => {
      if(err) {
        console.log(err)
      }
      console.log('---');
      console.log(output);
      console.log(str);
      console.log('---');
      fse.outputFileSync(output, str)
  });
}


const rootDir = process.cwd();
const schemaDir = path.join(rootDir, 'src/schema');

import { glob } from 'glob';
import { dirname } from 'path';

(async () => {
   const files = await glob(path.join(schemaDir,'/**/*.graphql'));
   for(const f of files) {
     const typeDefsContent = await graphqlCodeGen(f);
     const outputPath = path.resolve(dirname(f), './resolvers.ts');
     if(!fs.existsSync(outputPath)) {
       generateResolverTemplate(typeDefsContent, outputPath, getParentFolder(f));
     }
   }
   const resolvers = files.map((f) => path.parse(f).name).filter((f) => f !== 'schema');

   generateMainResolver({resolvers, output: path.join(schemaDir, "resolvers.ts")})

 })();


