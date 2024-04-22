package com.kreitek.users.domain.persistence;

import com.kreitek.users.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserPersistence {
    List<User> getAllUsers();
    Optional<User> getUserByName(String nombre);
    Optional<User> getUserByLastName(String apellidos);
    Optional<User> getUserByRol(Enum rol);
    User saveUser(User user);
    void deleteUser(Long userId);
}
