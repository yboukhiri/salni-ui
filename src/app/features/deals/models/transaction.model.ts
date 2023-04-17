export interface Transaction {
  id: number;
  fromUserId: number;
  toUserId: number;
  amount: number;
  createdAt: string;
  accepted: boolean;
  cancelled: boolean;
  acceptedAt: string;
  cancelledAt: string;
}
