import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersComponent } from './customers.component';

describe('CustomersComponent', () => {
  let component: CustomersComponent;
  let fixture: ComponentFixture<CustomersComponent>;

<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersComponent]
    });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomersComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    fixture = TestBed.createComponent(CustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
