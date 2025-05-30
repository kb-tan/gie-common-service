/* tslint:disable */
/* eslint-disable */
/**
 * Hello World API
 * A simple API to manage \'Hello World\' messages.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Message
 */
export interface Message {
    /**
     * 
     * @type {number}
     * @memberof Message
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Message
     */
    content?: string;
}

/**
 * Check if a given object implements the Message interface.
 */
export function instanceOfMessage(value: object): value is Message {
    return true;
}

export function MessageFromJSON(json: any): Message {
    return MessageFromJSONTyped(json, false);
}

export function MessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Message {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'content': json['content'] == null ? undefined : json['content'],
    };
}

export function MessageToJSON(json: any): Message {
    return MessageToJSONTyped(json, false);
}

export function MessageToJSONTyped(value?: Message | null, ignoreDiscriminator: boolean = false): any {
    if (value == null) {
        return value;
    }

    return {
        
        'id': value['id'],
        'content': value['content'],
    };
}

