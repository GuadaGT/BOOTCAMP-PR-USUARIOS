export class User {
  id: number | undefined;
  nomre: string;
  apellido: string;
  email: string;
  rol: UserRole;
}

export enum UserRole {
  ADMINISTRADOR = 'ADMINISTRADOR',
  CONTRIBUTOR = 'CONTRIBUTOR',
}
