package com.kreitek.users.application.dto;

import com.kreitek.users.domain.type.RolType;

import java.io.Serializable;
import java.util.Objects;

public class UserDto implements Serializable {

    private Long id;
    private String nombre;
    private String apellidos;
    private String email;
    private RolType rol;

    public UserDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public RolType getRol() {
        return rol;
    }

    public void setRol(RolType rol) {
        this.rol = rol;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        UserDto userDto = (UserDto) o;
        return Objects.equals(id, userDto.id) && Objects.equals(nombre, userDto.nombre) && Objects.equals(apellidos, userDto.apellidos) && Objects.equals(email, userDto.email) && rol == userDto.rol;
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, nombre, apellidos, email, rol);
    }

    @Override
    public String toString() {
        return "UserDto{" +
                "id=" + id +
                ", nombre='" + nombre + '\'' +
                ", apellidos='" + apellidos + '\'' +
                ", email='" + email + '\'' +
                ", rol=" + rol +
                '}';
    }
}
