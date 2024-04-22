package com.kreitek.users.application.service;

import com.kreitek.users.application.dto.UserDto;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDto> getAllUsers();
    Optional<UserDto> getUserByName(String nombre);
    Optional<UserDto> getUserByLastName(String apellidos);
    Optional<UserDto> getUserByRol(Enum rol);
    UserDto saveUser(UserDto userDto);
    void deleteUser(Long userId);
}
