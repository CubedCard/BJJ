package com.jipderksen.bjj.repositories;

import com.jipderksen.bjj.models.Belt;
import com.jipderksen.bjj.models.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

/**
 * This class <description of functionality>
 *
 * @author jipderksen
 */
@Repository
public class UserRepository {
    List<User> users = new ArrayList<>();

    public UserRepository() {
        this.users.add(new User("Jippert", Belt.WHITE));
    }

    public List<User> getAllUsers() {
        return this.users;
    }

    public User getUserByUsername(String username) {
        return this.users.stream()
                .filter(user -> user.getUsername().toLowerCase().trim().equals(username.toLowerCase().trim()))
                .findFirst()
                .orElse(null);
    }
}
