/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.13.9
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { V1LoadBalancerStatus } from './v1LoadBalancerStatus';

/**
* ServiceStatus represents the current status of a service.
*/
export class V1ServiceStatus {
    'loadBalancer'?: V1LoadBalancerStatus;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "loadBalancer",
            "baseName": "loadBalancer",
            "type": "V1LoadBalancerStatus"
        }    ];

    static getAttributeTypeMap() {
        return V1ServiceStatus.attributeTypeMap;
    }
}

