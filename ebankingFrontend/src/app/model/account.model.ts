<<<<<<< HEAD
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
=======
export interface AccountDetails {
  accountId:            string;
  balance:              number;
  currentPage:          number;
  totalPages:           number;
  pageSize:             number;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
  accountOperationDTOS: AccountOperation[];
}

export interface AccountOperation {
<<<<<<< HEAD
  id: number;
  operationDate: Date;
  amount: number;
  type: string;
  description: string;
=======
  id:            number;
  operationDate: Date;
  amount:        number;
  type:          string;
  description:   string;
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
}
