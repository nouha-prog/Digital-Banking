import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AccountDetails, Account } from '../model/account.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  public getAccountsByCustomerId(customerId: number): Observable<Account[]> {
    return this.http.get<Account[]>(`${environment.backendHost}/accounts`).pipe(
      map(accounts => accounts.filter(account => account.customerDTO.id === customerId))
    );
  }

  public getAccount(accountId: string, page: number, size: number): Observable<AccountDetails> {
    return this.http.get<AccountDetails>(`${environment.backendHost}/accounts/${accountId}/history?page=${page}&size=${size}`);
  }

  public debit(accountId: string, amount: number, description: string) {
    let data = { accountId, amount, description };
    return this.http.post(`${environment.backendHost}/accounts/debit`, data);
  }

  public credit(accountId: string, amount: number, description: string) {
    let data = { accountId, amount, description };
    return this.http.post(`${environment.backendHost}/accounts/credit`, data);
  }

  public transfer(accountSource: string, accountDestination: string, amount: number, description: string) {
    let data = { accountSource, accountDestination, amount, description };
    return this.http.post(`${environment.backendHost}/accounts/transfer`, data);
  }
}
