/**
 * Salni API
 * The backend API for the Salni app
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


export interface TransactionDto { 
    id: number;
    fromUserId: number;
    toUserId: number;
    amount: number;
    currency: string;
    createdAt: string;
    accepted: boolean;
    rejected: boolean;
    acceptedAt: string;
    rejectedAt: string;
}

