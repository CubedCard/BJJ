package com.jipderksen.bjj.repositories;

import com.jipderksen.bjj.models.Belt;
import com.jipderksen.bjj.models.RolPartner;
import com.jipderksen.bjj.models.Training;
import com.jipderksen.bjj.models.User;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Date;
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
        this.users.get(0).addTraining(new Training(new Date(), 60, 4, "Double Sleeve Guard", ""));
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

    public boolean addTrainingForUser(Training training, String username) {
        User user = this.getUserByUsername(username);
        if (user == null) return false;
        return user.addTraining(training);
    }

    public boolean addRolPartnerForUser(RolPartner rolPartner, String username) {
        User user = this.getUserByUsername(username);
        if (user == null) return false;
        return user.addRolPartner(rolPartner);
    }

    public boolean promoteUser(String username) {
        User user = this.getUserByUsername(username);
        if (user == null) return false;
        if (user.getBelt() == Belt.BLACK) return false;
        user.setBelt(Belt.values()[user.getBelt().ordinal() + 1]);
        return true;
    }

    public List<Training> getAllTrainingsForUser(String username) {
        User user = this.getUserByUsername(username);
        if (user == null) return new ArrayList<>();
        else return user.getTrainings();
    }
}
