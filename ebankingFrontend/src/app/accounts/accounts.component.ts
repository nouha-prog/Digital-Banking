import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { AccountDetails } from '../model/account.model';
import { AccountService } from '../services/accounts.service';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

=======
import { FormBuilder, FormGroup } from "@angular/forms";
import { AccountsService } from "../services/accounts.service";
import { catchError, Observable, throwError } from "rxjs";
import { AccountDetails } from "../model/account.model";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4

@Component({
  selector: 'app-accounts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './accounts.component.html',
<<<<<<< HEAD
  styleUrl: './accounts.component.css'
=======
  styleUrls: ['./accounts.component.css']
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
})
export class AccountsComponent implements OnInit {
  accountFormGroup!: FormGroup;
  currentPage: number = 0;
  pageSize: number = 5;
<<<<<<< HEAD
  accountObservable!: Observable<AccountDetails>
  operationFromGroup!: FormGroup;
  errorMessage!: string ;

  constructor(private fb : FormBuilder, private accountService : AccountService, public authService: AuthService) { }
=======
  accountObservable!: Observable<AccountDetails>;
  operationFromGroup!: FormGroup;
  errorMessage!: string;

  constructor(private fb: FormBuilder, private accountService: AccountsService) { }
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4

  ngOnInit(): void {
    this.accountFormGroup = this.fb.group({
      accountId: this.fb.control('')
    });
    this.operationFromGroup = this.fb.group({
      operationType: this.fb.control(null),
      amount: this.fb.control(0),
      description: this.fb.control(null),
      accountDestination: this.fb.control(null)
<<<<<<< HEAD
    })
  }

  handleSearchAccount() {
    let accountId : string = this.accountFormGroup.value.accountId;
    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(() => err);
=======
    });
  }

  handleSearchAccount() {
    let accountId: string = this.accountFormGroup.value.accountId;
    this.accountObservable = this.accountService.getAccount(accountId, this.currentPage, this.pageSize).pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
      })
    );
  }

  gotoPage(page: number) {
    this.currentPage = page;
    this.handleSearchAccount();
  }

  handleAccountOperation() {
    let accountId: string = this.accountFormGroup.value.accountId;
    let operationType = this.operationFromGroup.value.operationType;
    let amount: number = this.operationFromGroup.value.amount;
    let description: string = this.operationFromGroup.value.description;
    let accountDestination: string = this.operationFromGroup.value.accountDestination;
<<<<<<< HEAD

    if(operationType=='DEBIT'){
      this.accountService.debit(accountId, amount, description).subscribe({
        next : (data) =>{
=======
    if (operationType == 'DEBIT') {
      this.accountService.debit(accountId, amount, description).subscribe({
        next: (data) => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
          alert("Success Credit");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
<<<<<<< HEAD
        error : (err) => {
          console.log(err);
        }
      });
    } else if(operationType=='CREDIT'){
      this.accountService.credit(accountId, amount, description).subscribe({
        next : (data) => {
=======
        error: (err) => {
          console.log(err);
        }
      });
    } else if (operationType == 'CREDIT') {
      this.accountService.credit(accountId, amount, description).subscribe({
        next: (data) => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
          alert("Success Debit");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
<<<<<<< HEAD
        error : (err) => {
=======
        error: (err) => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
          console.log(err);
        }
      });
    }
<<<<<<< HEAD
    else if(operationType=='TRANSFER'){
      this.accountService.transfer(accountId,accountDestination, amount,description).subscribe({
        next : (data) => {
=======
    else if (operationType == 'TRANSFER') {
      this.accountService.transfer(accountId, accountDestination, amount, description).subscribe({
        next: (data) => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
          alert("Success Transfer");
          this.operationFromGroup.reset();
          this.handleSearchAccount();
        },
<<<<<<< HEAD
        error : (err) => {
=======
        error: (err) => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
          console.log(err);
        }
      });
    }
  }
}
