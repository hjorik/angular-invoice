import { Injectable } from '@angular/core';
import PocketBase from 'pocketbase';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiClient {
  private pb = new PocketBase('http://127.0.0.1:8090');

  getCustomers(): Observable<any> {
    return from(
      this.pb.collection('customers').getFullList({
        sort: '-created',
      }),
    );
  }

  getCustomer(id: string): Observable<any> {
    return from(
      this.pb.collection('customers').getOne(id, {
        expand: 'relField1,relField2.subRelField',
      }),
    );
  }
}
