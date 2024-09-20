import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) {}

  getUsuarios(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authTokenG');
  }
}
