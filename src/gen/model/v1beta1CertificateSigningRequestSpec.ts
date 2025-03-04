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
* This information is immutable after the request is created. Only the Request and Usages fields can be set on creation, other fields are derived by Kubernetes and cannot be modified by users.
*/
export class V1beta1CertificateSigningRequestSpec {
    /**
    * Extra information about the requesting user. See user.Info interface for details.
    */
    'extra'?: { [key: string]: Array<string>; };
    /**
    * Group information about the requesting user. See user.Info interface for details.
    */
    'groups'?: Array<string>;
    /**
    * Base64-encoded PKCS#10 CSR data
    */
    'request': string;
    /**
    * UID information about the requesting user. See user.Info interface for details.
    */
    'uid'?: string;
    /**
    * allowedUsages specifies a set of usage contexts the key will be valid for. See: https://tools.ietf.org/html/rfc5280#section-4.2.1.3      https://tools.ietf.org/html/rfc5280#section-4.2.1.12
    */
    'usages'?: Array<string>;
    /**
    * Information about the requesting user. See user.Info interface for details.
    */
    'username'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "extra",
            "baseName": "extra",
            "type": "{ [key: string]: Array<string>; }"
        },
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<string>"
        },
        {
            "name": "request",
            "baseName": "request",
            "type": "string"
        },
        {
            "name": "uid",
            "baseName": "uid",
            "type": "string"
        },
        {
            "name": "usages",
            "baseName": "usages",
            "type": "Array<string>"
        },
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return V1beta1CertificateSigningRequestSpec.attributeTypeMap;
    }
}

