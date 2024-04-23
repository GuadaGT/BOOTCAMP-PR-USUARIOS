import { Component, OnInit } from '@angular/core';
import { User, UserRole } from "../model/user.model";
import { UserService } from "../service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  mode: "NEW" | "UPDATE" = "NEW";
  userId?: number;
  user?: User;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
    const entryParam: string = this.route.snapshot.paramMap.get("userId") ?? "new";
      this.initializeUser();

  }

  public saveUser(): void {
      this.insertUser();
    }

  public selectRole(event: Event): void {
    const rol = (event.target as HTMLSelectElement).value;
    if (this.user) {
      this.user.rol = rol as UserRole;
    }
  }

  private insertUser(): void {
    this.userService.insert(this.user!).subscribe({
      next: (itemInserted) => {
        console.log("Insertado correctamente");
        console.log(itemInserted);
        this.router.navigate(["/users"]);
      },
      error: (err) => { this.handleError(err); }
    })
  }


  private initializeUser(): void {
    this.user = new User(undefined, "", "", "", UserRole.ADMINISTRADOR);
  }

  private handleError(error: any): void {
    console.log(error);
  }
}
