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
})
export class CustomerAccountsComponent implements OnInit {
  customerId!: string;
  customer!: Customer;
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
    this.customer = this.router.getCurrentNavigation()?.extras.state as Customer;
  }

  ngOnInit(): void {
    this.customerId = this.route.snapshot.params['id'];
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
  }
}
