package com.kreitek.users.application.service.impl;

import com.kreitek.users.application.dto.UserDto;
import com.kreitek.users.application.mapper.UserMapper;
import com.kreitek.users.application.service.UserService;
import com.kreitek.users.domain.entity.User;
import com.kreitek.users.domain.persistence.UserPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private final UserPersistence persistence;
    private final UserMapper mapper;

    @Autowired
    public UserServiceImpl(UserPersistence persistence, UserMapper mapper) {
        this.persistence = persistence;
        this.mapper = mapper;
    }

    @Override
    public List<UserDto> getAllUsers() {
        List<User> users = this.persistence.getAllUsers();
        return mapper.toDto(users);
    }

    @Override
    public Optional<UserDto> getUserByName(String nombre) {
        return this.persistence.getUserByName().map(mapper::toDto);
    }

    @Override
    public Optional<UserDto> getUserByLastName(String apellidos) {
        return Optional.empty();
    }

    @Override
    public Optional<UserDto> getUserByRol(Enum rol) {
        return Optional.empty();
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        return null;
    }

    @Override
    public void deleteUser(Long userId) {

    }
}
