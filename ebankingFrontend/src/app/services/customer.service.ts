<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer.model';
import { environment } from '../../environments/environment';
=======
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Customer} from "../model/customer.model";
import {environment} from "../../environments/environment";
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
<<<<<<< HEAD

  constructor(private http: HttpClient) { }

  public getCustomers():Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
  }

  public searchCustomers(keyword: string):Observable<Array<Customer>> {
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }

  public saveCustomer(customer: Customer):Observable<Customer> {
    return this.http.post<Customer>(environment.backendHost+"/customers",customer);
  }

  public deleteCustomer(id: number) {
=======
  constructor(private http:HttpClient) { }

  public getCustomers():Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers")
  }
  public searchCustomers(keyword : string):Observable<Array<Customer>>{
    return this.http.get<Array<Customer>>(environment.backendHost+"/customers/search?keyword="+keyword)
  }
  public saveCustomer(customer: Customer):Observable<Customer>{
    return this.http.post<Customer>(environment.backendHost+"/customers",customer);
  }
  public deleteCustomer(id: number){
>>>>>>> 5a4163c096d1ffc6b51c0bdc56f9367f35f69df4
    return this.http.delete(environment.backendHost+"/customers/"+id);
  }
}
