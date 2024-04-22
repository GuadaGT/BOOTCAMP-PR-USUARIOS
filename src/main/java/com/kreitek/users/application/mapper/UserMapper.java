package com.kreitek.users.application.mapper;

import com.kreitek.users.application.dto.UserDto;
import com.kreitek.users.domain.entity.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper extends EntityMapper <UserDto, User>{

    default User fromId(Long id) {
        if (id == null) return null;
        User user = new User();
        user.setId(id);
        return user;
    }
}
