import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private router: Router) {}

  getAllUsers(): Observable<any> {
    return this.http.get<any>(`${baseURL}users/getAllUsers`,{withCredentials: true});
  }
}
