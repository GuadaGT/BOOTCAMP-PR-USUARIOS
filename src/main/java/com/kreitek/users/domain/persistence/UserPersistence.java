package com.kreitek.users.domain.persistence;

import com.kreitek.users.domain.entity.User;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Optional;

public interface UserPersistence {
    List<User> getAllUsers();
    Optional<User> getUserById(Long userId);
    User saveUser(User user);
    void deleteUser(Long userId);
    Page<User> findAll(Pageable pageable, String filter);
}
