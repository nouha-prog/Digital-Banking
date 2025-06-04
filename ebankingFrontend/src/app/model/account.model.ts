import { Customer } from "./customer.model";

export interface Account {
  id: string;
  type: string;
  balance: number;
  createdAt: string;
  status: string;
  currency?: string;
  customerDTO: Customer;
  interestRate?: number;
  overDraft?: number;
}

export interface AccountDetails {
  accountId: string;
  balance: number;
  currentPage: number;
  totalPages: number;
  pageSize: number;
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
  id: number;
  operationDate: Date;
  amount: number;
  type: string;
  description: string;
}
