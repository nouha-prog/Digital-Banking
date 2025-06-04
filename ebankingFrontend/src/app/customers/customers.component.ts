<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { catchError, map, Observable, throwError } from 'rxjs';
import { Customer } from '../model/customer.model';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
=======
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { CustomerService } from "../services/customer.service";
import { catchError, map, Observable, throwError } from "rxjs";
import { Customer } from "../model/customer.model";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './customers.component.html',
<<<<<<< HEAD
  styleUrl: './customers.component.css'
=======
  styleUrls: ['./customers.component.css']
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
})
export class CustomersComponent implements OnInit {
  customers!: Observable<Array<Customer>>;
  errorMessage!: string;
<<<<<<< HEAD
  searchFormGroup : FormGroup | undefined;

  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router, public authService: AuthService) {}

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control('')
    });
    this.handleSearchCustomers();
  }

=======
  searchFormGroup: FormGroup | undefined;
  constructor(private customerService: CustomerService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.searchFormGroup = this.fb.group({
      keyword: this.fb.control("")
    });
    this.handleSearchCustomers();
  }
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
  handleSearchCustomers() {
    let kw = this.searchFormGroup?.value.keyword;
    this.customers = this.customerService.searchCustomers(kw).pipe(
      catchError(err => {
<<<<<<< HEAD
        this.errorMessage=err.message;
        return throwError(() => err);
=======
        this.errorMessage = err.message;
        return throwError(err);
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
      })
    );
  }

  handleDeleteCustomer(c: Customer) {
    let conf = confirm("Are you sure?");
<<<<<<< HEAD
    if(!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next : (resp) => {
        this.customers=this.customers.pipe(
          map(data =>{
            let index = data.indexOf(c);
            data.slice(index, 1)
=======
    if (!conf) return;
    this.customerService.deleteCustomer(c.id).subscribe({
      next: (resp) => {
        this.customers = this.customers.pipe(
          map(data => {
            let index = data.indexOf(c);
            data.slice(index, 1);
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
            return data;
          })
        );
      },
<<<<<<< HEAD
      error : err => {
        console.log(err);
      }
    })
  }

  handleCustomerAccounts(customer: Customer) {
    this.router.navigateByUrl(`/admin/customer-accounts/${customer.id}`, {state: customer});
=======
      error: err => {
        console.log(err);
      }
    });
  }

  handleCustomerAccounts(customer: Customer) {
    this.router.navigateByUrl("/customer-accounts/" + customer.id, { state: customer });
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
  }
}
