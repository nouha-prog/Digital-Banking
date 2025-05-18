import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { catchError, Observable, throwError } from 'rxjs';

// @ts-ignore
import { AccountsService } from '../services/accounts.service';
// @ts-ignore
import { AccountDetails } from '../model/account.model';

@Component({
  selector: 'app-accounts',
  standalone: true,
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css'],
  imports: [CommonModule, ReactiveFormsModule]
})
export class AccountsComponent implements OnInit {
  accountFormGroup!: FormGroup;
  operationFormGroup!: FormGroup;

  currentPage: number = 0;
  pageSize: number = 5;
  accountObservable!: Observable<AccountDetails>;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private accountService: AccountsService) {}

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: this.fb.control('', [Validators.required])
    });

    this.operationFormGroup = this.fb.group({
      operationType: this.fb.control(null, [Validators.required]),
      amount: this.fb.control(0, [Validators.required, Validators.min(1)]),
      description: this.fb.control(null, [Validators.required]),
      accountDestination: this.fb.control(null)
    });
  }

  handleSearchAccount(): void {
    const accountId: string = this.accountFormGroup.value.accountId;

    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMessage = err.message || 'An error occurred';
        return throwError(() => err);
      })
    );
  }

  gotoPage(page: number): void {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation(): void {
    const accountId: string = this.accountFormGroup.value.accountId;
    const { operationType, amount, description, accountDestination } = this.operationFormGroup.value;

    if (operationType === 'DEBIT') {
      this.accountService.debit(accountId, amount, description).subscribe({
        next: () => {
          alert('Debit successful!');
          this.operationFormGroup.reset();
          this.handleSearchAccount();
        },
        error: (err: any) => console.error(err)
      });

    } else if (operationType === 'CREDIT') {
      this.accountService.credit(accountId, amount, description).subscribe({
        next: () => {
          alert('Credit successful!');
          this.operationFormGroup.reset();
          this.handleSearchAccount();
        },
        error: (err: any) => console.error(err)
      });

    } else if (operationType === 'TRANSFER') {
      this.accountService.transfer(accountId, accountDestination, amount, description).subscribe({
        next: () => {
          alert('Transfer successful!');
          this.operationFormGroup.reset();
          this.handleSearchAccount();
        },
        error: (err: any) => console.error(err)
      });
    }
  }
}
