import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from "rxjs/operators";
import { SearchInterface } from "./search-interface";
import { UserInterface } from "./user-interface";
import { ReposInterface } from "./repos-interface";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  //service base URL
  baseURL: string;

  //usersResult: SearchInterface;
  usersResult = new BehaviorSubject<SearchInterface>({
    items: [],
    total_count: null,
    incomplete_results: false
  })

  constructor(private http: HttpClient) {
    this.baseURL = 'https://api.github.com/';
  }

  searchUsers(searchTerm: string, page: number = 1):Observable<SearchInterface>{
    return this.http.get<SearchInterface>(this.baseURL+'search/users?q='+searchTerm+'&per_page=20&page='+page)
      .pipe(
        tap(res => {
          this.usersResult.next(res);
        })
      );
  };

  fetchUsers(){
    return this.usersResult;
  };

  fetchUser(id:string):Observable<UserInterface>{
    return this.http.get<UserInterface>(this.baseURL+'users/'+id);
  };

  fetchRepos(id):Observable<ReposInterface[]>{
    return this.http.get<ReposInterface[]>(this.baseURL+'users/'+id+'/repos');
  }
}
