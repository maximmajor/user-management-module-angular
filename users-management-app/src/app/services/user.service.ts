import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly baseUrl = 'http://localhost:3000/user/';

  constructor(private http: HttpClient) { }

  // Method for POST request
  createUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}create`, user);
  }

  // Method for GET request
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}`);
  }
}
