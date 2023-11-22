package com.jipderksen.bjj.controllers;

import com.jipderksen.bjj.models.User;
import com.jipderksen.bjj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * This class <description of functionality>
 *
 * @author jipderksen
 */
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserRepository repository;

    @GetMapping("")
    public List<User> getUser() {
        return this.repository.getAllUsers();
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return this.repository.getUserByUsername(username);
    }
}
