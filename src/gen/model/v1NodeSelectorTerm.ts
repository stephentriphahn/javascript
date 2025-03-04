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

import { V1NodeSelectorRequirement } from './v1NodeSelectorRequirement';

/**
* A null or empty node selector term matches no objects. The requirements of them are ANDed. The TopologySelectorTerm type implements a subset of the NodeSelectorTerm.
*/
export class V1NodeSelectorTerm {
    /**
    * A list of node selector requirements by node\'s labels.
    */
    'matchExpressions'?: Array<V1NodeSelectorRequirement>;
    /**
    * A list of node selector requirements by node\'s fields.
    */
    'matchFields'?: Array<V1NodeSelectorRequirement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "matchExpressions",
            "baseName": "matchExpressions",
            "type": "Array<V1NodeSelectorRequirement>"
        },
        {
            "name": "matchFields",
            "baseName": "matchFields",
            "type": "Array<V1NodeSelectorRequirement>"
        }    ];

    static getAttributeTypeMap() {
        return V1NodeSelectorTerm.attributeTypeMap;
    }
}

