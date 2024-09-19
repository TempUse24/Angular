import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TokenService {
  private token!: string;
  constructor(private http: HttpClient) {}

  sendTokenRequest() {
    let jsonRequestBody: any = { username: 'foo', password: 'foo' };
    let url = 'http://localhost:8000/authenticate';
    return this.http.post(url, jsonRequestBody, {
      responseType: 'text' as 'json',
    });
  }

  sendAuthRequest() {
    const headers = new HttpHeaders().set(
      'Authorization',
      'Bearer ' + this.token
    );
    let url = 'http://localhost:8000/authorize';
    this.http.get(url, { headers, responseType: 'text' as 'json' });
  }
}
