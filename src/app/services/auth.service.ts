import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})


export class AuthService {
  constructor(private router: Router) {}

  // The setToken will receive a token and store it in the local storage.
  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  // The getToken will return a token from the local storage.
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // The isLoggedIn will check if the token is present or not, if yes it will return it.  
  // But in real projects it should check if the 
  // token is valid or not, if valid return true and if not return false.
  isLoggedIn() {
    return this.getToken() !== null;
  }

  // The logout will remove the token from the local storage and it will navigate the user to 'login' page.
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  /*
  here the login is receiving an object which must have two items 'email' and 'password'.
  and then it will check the values of those two items with a static values in the if condition.
  If the email and password matches, a random static token will get store in local storage through
  setToken function and then it will return an observable which is two items user's name and email.
  And if the email and password does not match, it will throw an error.

  Well, In real project below function should be connected with an API.
  */
  login({ email, password }: any): Observable<any> {
    if (email === 'aumsoni2002@gmail.com' && password === 'aum123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Aum Soni', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
