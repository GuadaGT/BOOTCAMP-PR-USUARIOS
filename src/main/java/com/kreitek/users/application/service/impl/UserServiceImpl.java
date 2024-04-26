package com.kreitek.users.application.service.impl;

import com.kreitek.users.application.dto.UserDto;
import com.kreitek.users.application.mapper.UserMapper;
import com.kreitek.users.application.service.UserService;
import com.kreitek.users.domain.entity.User;
import com.kreitek.users.domain.persistence.UserPersistence;
import com.kreitek.users.domain.type.RolType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
    public Optional<UserDto> getUserById(Long userId) {
        return this.persistence.getUserById(userId).map(mapper::toDto);
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        User user = this.persistence.saveUser(this.mapper.toEntity(userDto));
        return this.mapper.toDto(user);
    }

    @Override
    public Optional<UserDto> updateUser(Long userId, UserDto userDto) {
        Optional<User> existingUserOptional = persistence.getUserById(userId);
        if (existingUserOptional.isPresent()) {
            User existingUser = existingUserOptional.get();
            if (userDto.getNombre() != null) {
                existingUser.setNombre(userDto.getNombre());
            } if (userDto.getApellidos() != null) {
                existingUser.setApellidos(userDto.getApellidos());
            } if (userDto.getEmail() != null) {
                existingUser.setEmail(userDto.getEmail());
            } if (userDto.getRol() != null) {
                existingUser.setRol(userDto.getRol());
            }
            User updatedUser = persistence.saveUser(existingUser);
            return Optional.of(mapper.toDto(updatedUser));
        } else {
            return Optional.empty();
        }
    }

    @Override
    public void deleteUser(Long userId) {
        this.persistence.deleteUser(userId);
    }

    @Override
    public Page<UserDto> getUsersByCriteriaStringPage(Pageable pageable, String filter) {
        Sort sort = Sort.by(Sort.Direction.ASC, "nombre");
        pageable = PageRequest.of(pageable.getPageNumber(), pageable.getPageSize(), sort);
        Page<User> userPage = this.persistence.findAll(pageable,filter);
        return userPage.map(mapper::toDto);
    }

    @Override
    public List<RolType> getAllRols() {
        List<RolType> roles = new ArrayList<>();
        roles.add(RolType.ADMINISTRADOR);
        roles.add(RolType.CONTRIBUTOR);
        return roles;
    }
}


