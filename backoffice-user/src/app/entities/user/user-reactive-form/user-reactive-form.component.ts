import {Component, OnInit} from '@angular/core';
import {User, UserRole} from "../model/user.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-user-reactive-form',
  templateUrl: './user-reactive-form.component.html',
  styleUrls: ['./user-reactive-form.component.scss']
})
export class UserReactiveFormComponent implements OnInit {
  mode: "NEW" | "UPDATE" = "NEW";
  userId?: number;
  user?: User;

  userForm?: FormGroup;

  constructor(private route: ActivatedRoute,
              private userService: UserService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {
    this.buildForm();

    const entryParam: string = this.route.snapshot.paramMap.get("userId") ?? "new";
    if (entryParam !== "new") {
      this.userId = +this.route.snapshot.paramMap.get("userId")!;
      this.mode = "UPDATE";
      this.getUserById(this.userId!);
    } else {
      this.mode = "NEW";
      this.initializeUser();
    }
  }

  public saveUser(): void {
    const userToSave: User = this.createFromForm();
    if (this.mode === "NEW") {
      this.insertUser(userToSave);
    }

    if (this.mode === "UPDATE") {
      this.updateUser(userToSave);
    }
  }

  private buildForm(): void {
    this.userForm = this.formBuilder.group({
      id: [{value: undefined, disabled: true}],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      apellidos: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(60)]],
      email: ['', [Validators.required,Validators.minLength(6),Validators.maxLength(60)]],
      rol: [undefined, [Validators.required]]
    })
  }

  private updateForm(user: User): void {
    this.userForm?.patchValue({
      id: user.id ,
      nombre: user.nombre ,
      apellidos: user.apellidos,
      email: user.email,
      rol: user.rol,
    })
  }

  private createFromForm(): User {
    return {
      ...this.user,
      id: this.userForm?.get(['id'])!.value,
      nombre: this.userForm?.get(['nombre'])!.value,
      apellidos: this.userForm?.get(['apellidos'])!.value,
      email: this.userForm?.get(['email'])!.value,
      rol: this.userForm?.get(['rol'])!.value.name,
    };
  }

  public selectRole(event: Event): void {
    const rol = (event.target as HTMLSelectElement).value;
    if (this.user) {
      this.user.rol = rol as UserRole;
    }
  }

  private insertUser(userToSave: User): void {
    this.userService.insert(userToSave).subscribe({
      next: (userInserted) => {
        console.log("Insertado correctamente");
        console.log(userInserted);

      },
      error: (err) => {this.handleError(err);}
    })
  }
  private updateUser(userToSave: User): void {
    this.userService.update(userToSave).subscribe({
      next: (userUpdated) => {
        console.log("Modificado correctamente");
        console.log(userUpdated);
        this.router.navigate(["/users"]);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  public resetUser(): void {
      this.router.navigate(["/users"]);
  }

  private getUserById(userId: number) {
    this.userService.getUserById(userId).subscribe({
      next: (userRequest) => {
        this.user = userRequest;
        this.updateForm(userRequest);
      },
      error: (err) => {this.handleError(err);}
    })
  }

  private initializeUser(): void {
    this.user = new User(undefined, "", "", "", UserRole.ADMINISTRADOR);
  }

  private handleError(error: any): void {
    console.log(error);
  }

}
