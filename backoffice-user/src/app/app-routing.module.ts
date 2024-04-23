import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./entities/user/user-list/user-list.component";
import {UserEditComponent} from "./entities/user/user-edit/user-edit.component";
import {UserFormComponent} from "./entities/user/user-form/user-form.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UserListComponent,
  },
  {
    path: 'users/create',
    component: UserFormComponent,
  },
  {
    path: 'users/edit/:id',
    component: UserEditComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
