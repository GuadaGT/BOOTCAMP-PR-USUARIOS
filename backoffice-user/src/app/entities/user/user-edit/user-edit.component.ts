import { Component, OnInit } from '@angular/core';
import { User, UserRole } from "../model/user.model";
import { ActivatedRoute, Router } from "@angular/router";
import { UserService } from "../service/user.service";

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {

  mode: "NEW" | "UPDATE" = "UPDATE"; // Cambiado de "NEW" a "UPDATE"
  userId: number = 0;
  user: User =  new User(0, "", "", "", UserRole.ADMINISTRADOR);

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    const entryParam = this.route.snapshot.paramMap.get("userId") ?? "update";
    this.userId = parseInt(entryParam);
    this.getUserById(this.userId);
  }

  getUserById(userId: number): void {
    this.userService.getUserById(userId).subscribe({
      next: (user) => {
        this.user = user;
      },
      error: (err) => { this.handleError(err); }
    });
  }

  updateUser(): void {
    this.userService.update(this.user).subscribe({
      next: (itemUpdated) => {
        console.log("Usuario modificado correctamente");
        console.log(itemUpdated);
        this.router.navigate(["/users"]);
      },
      error: (err) => { this.handleError(err); }
    });
  }

  selectRole(event: Event): void {
    const rol = (event.target as HTMLSelectElement).value;
    if (this.user) {
      this.user.rol = rol as UserRole;
    }
  }

  private handleError(error: any): void {
    console.log(error);
  }

  protected readonly UserRole = UserRole;
}
