import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerAccountsComponent } from './customer-accounts.component';

describe('CustomerAccountsComponent', () => {
  let component: CustomerAccountsComponent;
  let fixture: ComponentFixture<CustomerAccountsComponent>;

<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerAccountsComponent]
    });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerAccountsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    fixture = TestBed.createComponent(CustomerAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
