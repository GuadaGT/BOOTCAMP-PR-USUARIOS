package com.kreitek.users.infraestructure.rest;

import com.kreitek.users.application.dto.UserDto;
import com.kreitek.users.application.service.UserService;
import com.kreitek.users.domain.type.RolType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class UserRestController {

    private final UserService userService;

    @Autowired
    public UserRestController(UserService userService) {
        this.userService = userService;
    }


    @GetMapping(value = "/users-all", produces = "application/json")
    ResponseEntity<List<UserDto>> getAllUsers() {
        List<UserDto> users = this.userService.getAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }


    @GetMapping(value = "/users", produces = "application/json")
    public ResponseEntity<Page<UserDto>> getUsersByCriteriaPaged(@RequestParam(value = "filter", required = false) String filter, Pageable pageable) {
        Page<UserDto> users = this.userService.getUsersByCriteriaStringPage(pageable, filter);
        return new ResponseEntity<Page<UserDto>>(users, HttpStatus.OK);
    }


    @GetMapping(value = "/users/rol", produces = "application/json")
    ResponseEntity<List<RolType>> getAllRols() {
        List<RolType> rol = this.userService.getAllRols();
        return new ResponseEntity<>(rol, HttpStatus.OK);
    }


    @GetMapping(value = "/users/{userId}")
    ResponseEntity<UserDto> getUserById(@PathVariable Long userId) {
        Optional<UserDto> user = this.userService.getUserById(userId);
        if (user.isPresent()) {
            return new ResponseEntity<>(user.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping(value = "/users", produces = "application/json", consumes = "application/json")
    ResponseEntity<UserDto> insertUser(@RequestBody UserDto userDto) {
        UserDto userSaved = this.userService.saveUser(userDto);
        return new ResponseEntity<>(userSaved, HttpStatus.CREATED);
    }


    @PatchMapping(value = "/users/{userId}", produces = "application/json", consumes = "application/json")
    ResponseEntity<UserDto> updateUser(@PathVariable Long userId, @RequestBody UserDto userDto) {
        Optional<UserDto> userUpdate = this.userService.updateUser(userId, userDto);
        if (userUpdate.isPresent()) {
            return new ResponseEntity<>(userUpdate.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


    @DeleteMapping(value = "/users/{userId}")
    ResponseEntity<?> deleteUserById(@PathVariable Long userId) {
        this.userService.deleteUser(userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
