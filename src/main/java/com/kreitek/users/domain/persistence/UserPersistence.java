package com.kreitek.users.domain.persistence;

import com.kreitek.users.application.dto.UserDto;
import com.kreitek.users.domain.entity.User;

import java.util.List;
import java.util.Optional;

public interface UserPersistence {
    List<User> getAllUsers();
    Optional<User> getUserById(Long userId);
    User saveUser(User user);
    void deleteUser(Long userId);

    Optional<User> getUserByName();
}
