package com.kreitek.users.domain.entity;

import com.kreitek.users.domain.type.RolType;
import jakarta.persistence.*;
import jakarta.validation.constraints.Size;

@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "userSequence")
    private Long id;

    @Column(name = "Name", length = 30, nullable = false)
    @Size(min = 3, max = 30)
    private String nombre;

    @Column(name = "Last_Name",length = 60, nullable = false)
    @Size(min = 3, max = 60)
    private String apellidos;

    @Column(name = "Email",length = 60, nullable = false)
    @Size(min = 3, max = 60)
    private String email;

    @Column(name = "Rol", nullable = false)
    @Enumerated(EnumType.STRING)
    private RolType rol;

    public User() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public RolType getRol() {
        return rol;
    }

    public void setRol(RolType rol) {
        this.rol = rol;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getApellidos() {
        return apellidos;
    }

    public void setApellidos(String apellidos) {
        this.apellidos = apellidos;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
}
