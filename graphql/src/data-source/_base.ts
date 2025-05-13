import type { KeyValueCache } from '@apollo/utils.keyvaluecache';
import type { IRequestContext } from '../types';
import { type possibleQueryResponse  } from './possible-types'


export class BaseDataSource<Type extends possibleQueryResponse> {
  protected tableName: string; 
  private findEntityByKeyCommand: (key: string, value: string) => any;
  private findEntityByRangeCommand: (start: number, end: number) => any;
  private statsCommand: (key: string) => any;

  constructor(tableName: string, queryFields: string[], cache: KeyValueCache, context: IRequestContext) {

    this.tableName = tableName;
    this.findEntityByKeyCommand = (key, value) => ({
      TableName: tableName,
      ProjectionExpression: queryFields.join(','),
      KeyConditionExpression: `${key} = :value`,
      ExpressionAttributeValues: {
        ":value": { "S": value }
      }
    });

    this.statsCommand = (key) => ({ });

    this.findEntityByRangeCommand = (start: number, end: number) => ({
    });
  }

  async findEntityByKey(key: string, value: string): Promise<possibleQueryResponse> | null {
    return {}
  }

  async stats(key): Promise<any> {
    return {};
  }

  async findEntityByRange(start: number, end: number): Promise<any> {
    return {}
  }

}