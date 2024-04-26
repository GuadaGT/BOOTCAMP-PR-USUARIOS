import { Component, OnInit } from '@angular/core';
import { User, RolType } from "../model/user.model";
import { UserService } from "../service/user.service";
import { ActivatedRoute } from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  page: number = 0;
  size: number = 7;
  sort: string = "nombre,asc";
  first: boolean = true;
  last: boolean = true;
  totalPages: number = 0;
  totalElements: number = 0;
  nameFilter?: string;
  lastNameFilter?: string;
  roles: RolType[] = Object.values(RolType);
  rolFilter?: RolType[] = [];
  borrarUsuario?: number;
  mostrarFiltro: boolean = false;
  noEncontrado: boolean = false;

  constructor(private userService: UserService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getAllUsers();
  }

  nextPage(): void {
    if (!this.last) {
      this.page++;
      this.getAllUsers();
    }
  }

  previousPage(): void {
    if (!this.first) {
      this.page--;
      this.getAllUsers();
    }
  }

  aplicarFiltro(): void {
    this.page = 0;
    this.getAllUsers();
  }

  borrarFiltro(): void {
    this.nameFilter = '';
    this.lastNameFilter = '';
    this.rolFilter = [];
    this.aplicarFiltro();
  }

  prepareUserToDelete(userId: number): void {
    this.borrarUsuario = userId;
  }

  deleteUser(): void {
    if (this.borrarUsuario) {
      this.userService.deleteUser(this.borrarUsuario).subscribe({
        next: (userRequest) => {
          this.getAllUsers();
        },
        error: (err) => {
          this.handleError(err);
        },
      });
    }
  }

  private buildFilters(): string | undefined {
    const filters: string[] = [];
    if (this.nameFilter) {
      filters.push("nombre:MATCH:" + this.nameFilter);
    }
    if (this.lastNameFilter) {
      filters.push("apellidos:MATCH:" + this.lastNameFilter);
    }
    if (this.rolFilter) {
      filters.push("rol:MATCH:" + this.rolFilter);
    }

    if (filters.length > 0) {
      let globalFilters: string = "";
      for (let filter of filters) {
        globalFilters = globalFilters + filter + ",";
      }
      globalFilters = globalFilters.substring(0, globalFilters.length - 1);
      return globalFilters;
    } else {
      return undefined;
    }
  }

  private getAllUsers(): void {
    const filters: string | undefined = this.buildFilters();

    this.userService.getAllUsers(this.page, this.size, this.sort, filters).subscribe({
      next: (data: any) => {
        this.users = data.content;
        this.first = data.first;
        this.last = data.last;
        this.totalPages = data.totalPages;
        this.totalElements = data.totalElements;
        this.noEncontrado = this.users.length === 0;
      },
      error: (err) => {
        this.handleError(err);
      },
    });
  }

  private handleError(error: any): void {
    console.log(error);
  }

  getPageNumbers(): number[] {
    const pageNumbers: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  }

  goToPage(pageNumber: number): void {
    this.page = pageNumber - 1;
    this.getAllUsers();
  }

  filtro(): void {
    this.mostrarFiltro = !this.mostrarFiltro;
  }
}
