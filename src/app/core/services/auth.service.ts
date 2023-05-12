import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Login } from '../models/login.model';
import { environment } from 'src/environments/environment';
import { AuthService } from 'src/app/generated-api';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  constructor(private http: HttpClient, private authApiService: AuthService) {}

  private isAuthenticatedSubject$: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  public isAuthenticated$: Observable<boolean> =
    this.isAuthenticatedSubject$.asObservable();

  private currentUserSubject$: BehaviorSubject<any> = new BehaviorSubject<any>(
    null
  );
  public currentUser$: Observable<string> =
    this.currentUserSubject$.asObservable();

  public authenticate(login: Login): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      this.authApiService.authControllerLogin(login).subscribe({
        next: (response) => {
          localStorage.setItem('auth_token', response.access_token);
          this.isAuthenticatedSubject$.next(true);
          this.authApiService.authControllerGetCurrentUser().subscribe({
            next: (response) => {
              this.currentUserSubject$.next(response);
              observer.next(true);
              observer.complete();
            },
            error: (error) => {
              observer.next(false);
              observer.complete();
            },
          });
        },
        error: (error) => {
          observer.next(false);
          observer.complete();
        },
      });
    });
  }

  public logout() {
    localStorage.removeItem('auth_token');
    this.isAuthenticatedSubject$.next(false);
    this.currentUserSubject$.next(null);
  }
}
