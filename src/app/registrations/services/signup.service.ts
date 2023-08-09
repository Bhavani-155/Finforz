import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.dev';
@Injectable({
  providedIn: 'root',
})
export class SignupService {
  constructor(private http: HttpClient) {}
  token: any = localStorage.getItem('authToken');
  requestHeaderDetails: any = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.token}`,
    }),
  };

  baseUrl: any = environment.baseUrl;
  apiUrl: any = this.baseUrl + '/signup';

  // get customer basic info
  getBasicDetails(customerId: any) {
    let endpoint = this.apiUrl + '/' + customerId;
    return this.http.get(endpoint, this.requestHeaderDetails).pipe(
      map((response: any) => {
        return response;
      })
    );
  }
}
