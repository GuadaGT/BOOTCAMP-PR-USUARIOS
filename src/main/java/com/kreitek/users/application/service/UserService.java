package com.kreitek.users.application.service;

import com.kreitek.users.application.dto.UserDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<UserDto> getAllUsers();
    Optional<UserDto> getUserById(Long userId);
    UserDto saveUser(UserDto userDto);
    Optional<UserDto> updateUser(Long userId, UserDto userDto);
    void deleteUser(Long userId);
    Page<UserDto> getUsersByCriteriaStringPage(Pageable pageable, String filter);

}
