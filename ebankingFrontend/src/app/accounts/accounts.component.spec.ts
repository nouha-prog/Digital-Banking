import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsComponent } from './accounts.component';

describe('AccountsComponent', () => {
  let component: AccountsComponent;
  let fixture: ComponentFixture<AccountsComponent>;

<<<<<<< HEAD
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountsComponent]
    });
=======
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsComponent ]
    })
      .compileComponents();
  });

  beforeEach(() => {
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    fixture = TestBed.createComponent(AccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
