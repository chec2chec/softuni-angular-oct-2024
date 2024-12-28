import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthenticationUser } from '../types/user';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private user$$ = new BehaviorSubject<AuthenticationUser | null>(null);  // Track user state
  public user$ = this.user$$.asObservable(); // Observable to expose to components

  constructor(private http: HttpClient) {
  //   // Optionally, check if the user is already logged in when the service is initialized (e.g., from localStorage)
  //   const storedUser = localStorage.getItem('user'); // or sessionStorage
  //   if (storedUser) {
  //     this.user$$.next(JSON.parse(storedUser));  // Restore the user from storage
  //   }
  }

  login(email: string, password: string): Observable<AuthenticationUser> {
    return this.http
      .post<AuthenticationUser>('/api/login', { email, password })
      .pipe(
        tap((user) => {
          this.user$$.next(user);  // Update the logged-in user
        })
      );
  }

  isLoggedIn(): boolean {
    return !!this.user$$.value;  // Return true if user is logged in, false otherwise
  }
}
