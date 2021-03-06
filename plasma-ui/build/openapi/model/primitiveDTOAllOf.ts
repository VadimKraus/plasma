/**
 * PLASMA Data Modeling Application
 * Service for modeling data sources
 *
 * The version of the OpenAPI document: 0.0.8
 * Contact: pomp@uni-wuppertal.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import { EntityConceptSuggestionDTO } from './entityConceptSuggestionDTO';


export interface PrimitiveDTOAllOf {
    dataType?: string;
    suggestedEntityConcepts?: Array<EntityConceptSuggestionDTO>;
    examples?: Array<string>;
    cleansingPattern?: string;
}

