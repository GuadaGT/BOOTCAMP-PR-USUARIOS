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

  public getAllUsers() : Observable<User[]> {
    let userUriAll = "http://localhost:8080/user/users-all"
    return this.http.get<User[]>(userUriAll);
  }

  public deleteUser(UserIdToDelete: number): Observable<any> {
    let deleteUri = "http://localhost:8080/user/users/" + UserIdToDelete;
    return this.http.delete<any>(deleteUri);
  }

  public insert(user: User): Observable<User> {
    return this.http.post<User>(this.userUri, user);
  }

  public getUserById(userId: number): Observable<User> {
    const userUriById = `${this.userUri}/${userId}`;
    return this.http.get<User>(userUriById);
  }

  public update(user: User): Observable<User> {
    return this.http.patch<User>(this.userUri, user);
  }
}
