import { Injectable } from '@angular/core';
import { AuthData } from '../models/auth-data.model';
import { User } from '../models/user.model';

import { map, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public authChange = new Subject<boolean>();
  private user!: any;
  private Jsontoken: string | undefined;

  constructor(private http: HttpClient, private router: Router) {}

  registerUser(authData: User): Observable<any> {
    //console.log("Service Data ==>",authData);
    return this.http.post<any>(`${baseURL}users/newUser`, authData);
  }

  login(authData: AuthData) {
    this.user = this.http.post(`${baseURL}users/login`, authData).pipe(
      map((user: any) => {
        //console.log('Service Call==>', authData);
        this.authSuccess();
        sessionStorage.setItem('Jsontoken', user.token);
        this.Jsontoken = user.token;
        return user;
      })
    );
    return this.user;
  }

  logout() {
    this.user.email = '';
    this.user.userid = '';
    this.authChange.next(false);
    sessionStorage.clear();
    this.router.navigate(['/']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() 
  {  
    // return this.user != null;
    if (this.user) 
    {
      //console.log('JSON Token ==>', this.Jsontoken);
      //console.log('JSON Token is true');
      return true;
    } 
    else 
    {
      //console.log('JSON Token ==>', this.Jsontoken);
      //console.log('JSON Token is not true');
      return false;
    }
 }

  private authSuccess() {
    this.authChange.next(true);
    // this.router.navigate(['/users']);
  }
}
