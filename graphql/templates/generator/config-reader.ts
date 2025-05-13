import * as rootPath from 'app-root-path';
import * as path from 'path';
import * as fs from 'fs';
import * as yaml from 'js-yaml';

const rootDir = rootPath.resolve('config');
const dirs = fs.readdirSync(rootDir);

export interface Service {
  name:  string;
  schema: string;
  endpointType: string;
  endpoint: string;
}

export const services: Service[] = yaml.load(
  fs.readFileSync(path.join(rootDir, 'services.yaml')), 'utf8');

