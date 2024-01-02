package com.jipderksen.bjj.controllers;

import com.jipderksen.bjj.models.RolPartner;
import com.jipderksen.bjj.models.Training;
import com.jipderksen.bjj.models.User;
import com.jipderksen.bjj.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
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

    @PostMapping("/{username}/training")
    public boolean addTraining(@PathVariable String username, @RequestBody Training training) {
        return this.repository.addTrainingForUser(training, username);
    }

    @GetMapping("/{username}/trainings")
    public List<Training> getAllTrainingsForUser(@PathVariable String username) {
        return this.repository.getAllTrainingsForUser(username);
    }

    @PostMapping("/{username}/rolPartner")
    public boolean addRolPartner(@PathVariable String username, @RequestBody RolPartner rolPartner) {
        return this.repository.addRolPartnerForUser(rolPartner, username);
    }

    @PutMapping("/{username}/promote")
    public boolean promoteUser(@PathVariable String username) {
        return this.repository.promoteUser(username);
    }

    @DeleteMapping("/{username}/{trainingDate}")
    public boolean deleteTraining(@PathVariable String username, @PathVariable String trainingDate) {
        return this.repository.deleteTrainingForUser(username, trainingDate);
    }
}
