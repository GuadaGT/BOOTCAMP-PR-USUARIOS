package com.kreitek.users.infraestructure.persistence;

import com.kreitek.users.domain.entity.User;
import com.kreitek.users.domain.persistence.UserPersistence;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class UserPersistenceImpl implements UserPersistence {

    private final UserRepository userRepository;

    @Autowired
    public UserPersistenceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public List<User> getAllUsers() {
        return this.userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long userId) {
        return this.userRepository.findById(userId);
    }
    @Override
    public User saveUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public void deleteUser(Long userId) {
        this.userRepository.deleteById(userId);
    }

    @Override
    public Optional<User> getUserByName() {
        return null;
    }
}
