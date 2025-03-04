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
* PolicyRule holds information that describes a policy rule, but does not contain information about who the rule applies to or which namespace the rule applies to.
*/
export class V1alpha1PolicyRule {
    /**
    * APIGroups is the name of the APIGroup that contains the resources.  If multiple API groups are specified, any action requested against one of the enumerated resources in any API group will be allowed.
    */
    'apiGroups'?: Array<string>;
    /**
    * NonResourceURLs is a set of partial urls that a user should have access to.  *s are allowed, but only as the full, final step in the path This name is intentionally different than the internal type so that the DefaultConvert works nicely and because the ordering may be different. Since non-resource URLs are not namespaced, this field is only applicable for ClusterRoles referenced from a ClusterRoleBinding. Rules can either apply to API resources (such as \"pods\" or \"secrets\") or non-resource URL paths (such as \"/api\"),  but not both.
    */
    'nonResourceURLs'?: Array<string>;
    /**
    * ResourceNames is an optional white list of names that the rule applies to.  An empty set means that everything is allowed.
    */
    'resourceNames'?: Array<string>;
    /**
    * Resources is a list of resources this rule applies to.  ResourceAll represents all resources.
    */
    'resources'?: Array<string>;
    /**
    * Verbs is a list of Verbs that apply to ALL the ResourceKinds and AttributeRestrictions contained in this rule.  VerbAll represents all kinds.
    */
    'verbs': Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "apiGroups",
            "baseName": "apiGroups",
            "type": "Array<string>"
        },
        {
            "name": "nonResourceURLs",
            "baseName": "nonResourceURLs",
            "type": "Array<string>"
        },
        {
            "name": "resourceNames",
            "baseName": "resourceNames",
            "type": "Array<string>"
        },
        {
            "name": "resources",
            "baseName": "resources",
            "type": "Array<string>"
        },
        {
            "name": "verbs",
            "baseName": "verbs",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1PolicyRule.attributeTypeMap;
    }
}

