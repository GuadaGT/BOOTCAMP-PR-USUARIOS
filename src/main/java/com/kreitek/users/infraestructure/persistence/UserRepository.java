package com.kreitek.users.infraestructure.persistence;

import com.kreitek.users.domain.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
}
