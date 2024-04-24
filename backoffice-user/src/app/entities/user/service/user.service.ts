import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUri = "http://localhost:8080/user/users";

  constructor(private http: HttpClient) { }

  public getAllUsers(page: number, size: number, sort: string, filters?: string): Observable<User[]> {
    let userUriAll = "http://localhost:8080/user/users?page=" + page + "&size=" + size + "&sort=" + sort;
    if (filters) {
      userUriAll = userUriAll + "&filter=" + filters;
    }
    return this.http.get<User[]>(userUriAll);
  }

  public deleteUser(UserIdToDelete: number): Observable<any> {
    let deleteUri = "http://localhost:8080/user/users/" + UserIdToDelete;
    return this.http.delete<any>(deleteUri);
  }

  public getUserById(userId: number): Observable<User> {
    let userUriById = "http://localhost:8080/user/users/" + userId;
    return this.http.get<User>(userUriById);
  }

  public insert(user: User): Observable<User> {
    return this.http.post<User>(this.userUri, user);
  }

  public update(user: User): Observable<User> {
    let uriUpdate = "http://localhost:8080/user/users/" + user.id ;
    return this.http.patch<User>(uriUpdate, user);
  }
}
