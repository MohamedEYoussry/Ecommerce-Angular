import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private loggedSubject: BehaviorSubject<boolean>;
  constructor() {
    this.loggedSubject = new BehaviorSubject<boolean>(this.UserState);
  }
  get UserState(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
  // login
  login(email: string, password: string) {
    let userToken = '012345';
    localStorage.setItem('token', userToken);
    this.loggedSubject.next(true);
  }
  // logout
  logout() {
    localStorage.removeItem('token');
    this.loggedSubject.next(false);
  }
  getUserStats(): Observable<boolean> {
    return this.loggedSubject.asObservable();
  } }