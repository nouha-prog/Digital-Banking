<<<<<<< HEAD
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../model/customer.model';
import { CommonModule } from '@angular/common';
import { AccountService } from '../services/accounts.service';
import { Account, AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-customer-accounts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer-accounts.component.html',
  styleUrl: './customer-accounts.component.css'
=======
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { Customer } from "../model/customer.model";
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-customer-accounts',
  standalone: true,
  imports: [CommonModule], // Ajout de CommonModule
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: string;
  customer!: Customer;
<<<<<<< HEAD
  accounts: Account[] = [];
  accountDetails: { [key: string]: AccountDetails } = {};
  errorMessage: string | null = null;
  loading: boolean = false;
  expandedAccounts: Set<string> = new Set();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private accountService: AccountService
  ) {
=======
  constructor(private route: ActivatedRoute, private router: Router) {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
<<<<<<< HEAD
    this.loadAccounts();
  }


  loadAccounts(): void {
    this.loading = true;
    this.accountService.getAccountsByCustomerId(+this.customerId).subscribe({
      next: (accounts) => {
        this.accounts = accounts;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load accounts: ' + err.message;
        this.loading = false;
      }
    });
  }

  toggleOperations(accountId: string): void {
    if (this.expandedAccounts.has(accountId)) {
      this.expandedAccounts.delete(accountId);
    } else {
      this.expandedAccounts.add(accountId);
      if (!this.accountDetails[accountId]) {
        this.loadAccountDetails(accountId);
      }
    }
  }

  loadAccountDetails(accountId: string): void {
    this.accountService.getAccount(accountId, 0, 5).subscribe({
      next: (details) => {
        this.accountDetails[accountId] = details;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load account details for ' + accountId + ': ' + err.message;
      }
    });
  }

  goBack(): void {
    this.router.navigateByUrl('/admin/customers');
=======
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
  }
}
