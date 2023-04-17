import { Transaction } from './transaction.model';

export interface Deal {
  id: number;
  userId1: number;
  userId2: number;
  transactions: Transaction[];
}
