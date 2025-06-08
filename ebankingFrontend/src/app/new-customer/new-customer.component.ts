import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomerService } from '../services/customer.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-customer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-customer.component.html',
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
  }
}
