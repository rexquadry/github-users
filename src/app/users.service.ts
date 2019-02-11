import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //service base URL
  baseURL: string;

  constructor(private http: HttpClient) {
    this.baseURL = 'https://api.github.com/';
  }

  getUsers(searchTerm: string, page: number = 1):Observable<{}>{
    return this.http.get(this.baseURL+'search/users?q='+searchTerm+'&per_page=20&page='+page)
      
  }
}
