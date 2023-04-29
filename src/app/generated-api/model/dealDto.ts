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
import { TransactionDto } from './transactionDto';


export interface DealDto { 
    id: number;
    userId1: number;
    userId2: number;
    transactions: Array<TransactionDto>;
}

