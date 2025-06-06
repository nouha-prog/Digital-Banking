import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Customer } from "../model/customer.model";
import { CustomerService } from "../services/customer.service";
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
<<<<<<< HEAD
  styleUrl: './new-customer.component.css'
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]]

  styleUrls: ['./new-customer.component.css']
})
export class NewCustomerComponent implements OnInit {
  newCustomerFormGroup!: FormGroup;
  constructor(private fb: FormBuilder, private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.newCustomerFormGroup = this.fb.group({
      name: this.fb.control(null, [Validators.required, Validators.minLength(4)]),
      email: this.fb.control(null, [Validators.required, Validators.email])

    });
  }

  handleSaveCustomer() {

    if (this.newCustomerFormGroup.valid) {
      const customer = this.newCustomerFormGroup.value;
      this.customerService.saveCustomer(customer).subscribe({
        next: () => {
          this.router.navigateByUrl('/admin/customers');
        },
        error: (err) => {
          console.error('Failed to save customer:', err);
        }
      });
    }
  }

  handleCancel() {
    if (!confirm('Are you sure you want to cancel? All changes will be lost.')) {
      return;
    }
    this.router.navigateByUrl('/admin/customers');

    let customer: Customer = this.newCustomerFormGroup.value;
    this.customerService.saveCustomer(customer).subscribe({
      next: data => {
        alert("Customer has been successfully saved!");
        //this.newCustomerFormGroup.reset();
        this.router.navigateByUrl("/customers");
      },
      error: err => {
        console.log(err);
      }
    });

  }
}
