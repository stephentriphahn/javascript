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


/**
* CrossVersionObjectReference contains enough information to let you identify the referred resource.
*/
export class V2beta2CrossVersionObjectReference {
    /**
    * API version of the referent
    */
    'apiVersion'?: string;
    /**
    * Kind of the referent; More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#types-kinds\"
    */
    'kind': string;
    /**
    * Name of the referent; More info: http://kubernetes.io/docs/user-guide/identifiers#names
    */
    'name': string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiVersion",
            "baseName": "apiVersion",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "kind",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V2beta2CrossVersionObjectReference.attributeTypeMap;
    }
}

