import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {UserListComponent} from "./entities/user/user-list/user-list.component";
import {UserFormComponent} from "./entities/user/user-form/user-form.component";
import {UserReactiveFormComponent} from "./entities/user/user-reactive-form/user-reactive-form.component";

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
    path: 'users/:userId',
    component: UserFormComponent,
  },
  {
    path: 'users/reactive/:userId',
    component: UserReactiveFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
