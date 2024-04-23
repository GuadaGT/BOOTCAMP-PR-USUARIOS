export enum UserRole {
  ADMINISTRADOR = 'ADMINISTRADOR',
  CONTRIBUTOR = 'CONTRIBUTOR',
}

export class User {
  id: number | undefined;
  nombre: string;
  apellidos: string;
  email: string;
  rol: UserRole;


  constructor(id: number | undefined, nombre: string, apellidos: string, email: string, rol: UserRole) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.email = email;
    this.rol = rol;
  }
}

