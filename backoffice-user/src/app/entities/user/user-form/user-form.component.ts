import { Component, OnInit } from '@angular/core';
import { User, RolType } from "../model/user.model";
import { UserService } from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  mode: "NEW" | "EDIT" = "NEW";
  userId?: number;
  user?: User;
  roles: RolType[] = [];

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("userId") ?? "new";
    if (entryParam !== "new") {
      this.userId = +this.route.snapshot.paramMap.get("userId")!;
      this.mode = "EDIT";
      this.getUserById(this.userId!);
    } else {
      this.mode = "NEW";
      this.initializeUser();
    }
    this.getRol();
  }

  getRol(): void{
    this.userService.getRol().subscribe({
      next: (roles) => {
        this.roles = roles;
      },
      error:(err) =>{
        this.handleError(err);
    }
    })
  }

  public saveUser(): void {
    if (this.mode === "NEW") {
      this.insertUser();
      this.router.navigate(["/users"])
    }
    if (this.mode === "EDIT") {
      this.updateUser();
      this.router.navigate(["/users"])
    }
  }

  insertUser() {
    this.userService.insert(this.user!).subscribe({
      next: (userInserted) => {
        console.log("Insertado correctamente");
        console.log(userInserted);
        this.router.navigate(["/users"]);
      },
      error: (err) => { this.handleError(err); }
    })
  }
 updateUser() {
    this.userService.update(this.user!).subscribe({
      next: (userUpdated) => {
        console.log("Modificado correctamente");
        console.log(userUpdated);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe({
      next: (userRequest) => {
        this.user = userRequest;

      },
      error: (err) => {this.handleError(err);}
    })
  }


  public resetUser(): void {
    this.router.navigate(["/users"])
  }

  private initializeUser(): void {
    this.user = new User(undefined, "", "", "", RolType.ADMINISTRADOR);
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
