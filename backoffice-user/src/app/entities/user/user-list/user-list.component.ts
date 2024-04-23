import {Component, OnInit} from '@angular/core';
import {User} from "../model/user.model";
import {UserService} from "../service/user.service";


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{

  users: User[] = [];
  userIdToDelete?: number;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers(): void{
    this.userService.getAllUsers().subscribe({
      next: (userRequest) => {this.users = userRequest; },
      error: (err) => {this.handleError(err);}
  })
}

 public prepareUserToDelete(userId: number): void {
  this.userIdToDelete = userId;
 }

 public deleteUser(): void {
    if (this.userIdToDelete) {
    this.userService.deleteUser(this.userIdToDelete).subscribe({
      next: (userRequest) => {
        this.getUsers();
      },
      error: (err) => {this.handleError(err);}
    })
    }
 }

  private handleError(error: any): void {
    console.log(error);
  }
}
