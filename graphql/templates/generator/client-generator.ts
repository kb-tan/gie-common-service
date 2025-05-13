const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');
const util = require('util')
const { createGraphQLSchema } = require('openapi-to-graphql');
const { printSchema } = require('graphql');

const generateClient = async (schemaPath) => {
  if(!schemaPath) {
    console.log("ts-node templates/generator/client-generator.ts <openapi schema path>")
    return
  }
  const inputPath = path.resolve(schemaPath)
  const outputDir = path.join(path.dirname(inputPath), '/', 'generated');
  const generatorName = 'typescript-fetch'; // Example for TypeScript Fetch
  const command = `openapi-generator-cli generate -i ${inputPath} -g ${generatorName} -o ${outputDir} --log-to-stderr`;
  return new Promise((resolve, reject) => {
    exec(command, (error) => {
        if (error) {
          console.error(`Error generating client: ${error}`);
          reject(error);
        }
        resolve("");
      });
    }); 
};

function getMethodNames(obj: any): string[] {
  return Object.getOwnPropertyNames(Object.getPrototypeOf(obj)).filter(
    (method) => typeof obj[method] === 'function' && method !== 'constructor'
  );
}

const generateDataSourceTemplate = ({ fields, output }) => { 
  const templateFile = path.join(__dirname, '../schema/data-source.ts.ejs');
  ejs.renderFile(templateFile, { fields },
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

const generateDataSource = (dataSources, templateFile, output) => {
  ejs.renderFile(
    templateFile,
    { dataSources },
    {},
    (err, str) => {
      if(err) {
        console.log(err);
      }
      fse.outputFileSync(output, str)
  });
};

const rootDir = process.cwd();
const schemaDir = path.join(rootDir, 'src');
import { glob } from 'glob';
import { dirname } from 'path';
import * as ejs from 'ejs';
import * as fse from 'fs-extra';

(async () => {
   const files = await glob(path.join(schemaDir,'/**/*.json'));
   for(const f of files) {
     console.log(f);
     await generateClient(f);
     const stub = require(path.join(dirname(f), '/generated/apis'))
     const s = stub[Object.keys(stub)[0]];
     console.log(getMethodNames(new s()));
     generateDataSourceTemplate({
       fields: getMethodNames(new s()).filter((f) => !f.includes('Raw')),
       output: path.join(dirname(f), 'data-source.ts')
     });
    //  console.log(fs.readFileSync(f, "utf-8"));
     console.log(path.parse(f));
     const { schema } = await createGraphQLSchema(
       JSON.parse(fs.readFileSync(f, "utf-8")),
        {
          operationIdFieldNames: {
            Query: 'operationId',
            Mutation: 'operationId',
            Subscription: 'operationId',
          },
          defaultOperationName: 'Query',
          defaultRootName: 'Query',
          defaultRootFieldNames: {
            Query: 'query',
            Mutation: 'mutation',
            Subscription: 'subscription',
          },
        }
     );
     fs.writeFileSync(path.join(path.dirname(f), path.parse(f).name) + '.graphql', printSchema(schema));
    //  console.log(printSchema(schema));
   }
   const dataSources = files.map((f) =>  path.parse(path.basename(f))).map(({ name }) => name);
   generateDataSource(dataSources, path.join(__dirname, '../types.ts.ejs'), "src/types.ts");
   generateDataSource(dataSources, path.join(__dirname, '../index.ts.ejs'), "src/data-source/index.ts");
 })();

