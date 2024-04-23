import {Component, OnInit} from '@angular/core';
import {User, UserRole} from "../model/user.model";
import {UserService} from "../service/user.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit{
  mode: "NEW" | "UPDATE" = "NEW";
  userId?: number;
  user?: User;


  constructor(private route: ActivatedRoute,
                private userService: UserService)  {}

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("userId") ?? "new";
    if (entryParam !== "new") {
      this.userId = +this.route.snapshot.paramMap.get("userId")!;
      this.mode = "UPDATE";
      /*this.getUserById(this.userId!);*/
    } else {
      this.mode = "NEW";
      this.initializeUser();
    }
  }

  public saveUser(): void {
    if (this.mode === "NEW") {
      this.insertUser();
    }

    if (this.mode === "UPDATE") {
      this.updateUser();
    }
  }

  private insertUser(): void {
    this.userService.insert(this.user!).subscribe({
      next: (itemInserted) => {
        console.log("Insertado correctamente");
        console.log(itemInserted);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private updateUser(): void {
    this.userService.update(this.user!).subscribe({
      next: (itemUpdated) => {
        console.log("Modificado correctamente");
        console.log(itemUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }
  /*private getUserById(userId: number) {
    this.userService.getAllUsers(userId).subscribe({
      next: (userRequest) => {
        this.user = userRequest;
      },
      error: (err) => {this.handleError(err);}
    })
  }*/

  private initializeUser(): void {
    this.user = new User(undefined, "","","",UserRole.CONTRIBUTOR);
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
