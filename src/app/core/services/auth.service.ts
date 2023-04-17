import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  private isAuthenticatedSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isAuthenticated: Observable<boolean> =
    this.isAuthenticatedSubject.asObservable();

  private currentUserSubject: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public currentUser: Observable<string> =
    this.currentUserSubject.asObservable();

  public authenticate(login: Login) {
    const url = `${environment.apiUrl}/auth`;
    this.http.post(url + '/login', login).subscribe((response: any) => {
      localStorage.setItem('auth_token', response.access_token);
      this.isAuthenticatedSubject.next(true);
      this.http.get(url).subscribe((response: any) => {
        this.currentUserSubject.next(response);
        console.log('user', this.currentUserSubject.value);
      });
    });
  }
}
