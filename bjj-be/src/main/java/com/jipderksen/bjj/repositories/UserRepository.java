package com.jipderksen.bjj.repositories;

import com.jipderksen.bjj.models.Belt;
import com.jipderksen.bjj.models.RolPartner;
import com.jipderksen.bjj.models.Training;
import com.jipderksen.bjj.models.User;
import org.springframework.stereotype.Repository;

import java.text.ParseException;
import java.text.SimpleDateFormat;
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
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
        this.users.get(0).addTraining(new Training(this.generateRandomDateTime(), 60, 4, "Double Sleeve Guard", ""));
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

    public boolean deleteTrainingForUser(String username, String training) {
        User user = this.getUserByUsername(username);
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSXXX");
        if (user == null) return false;
        try {
            Date trainingDate = dateFormat.parse(training);
            return user.removeTraining(trainingDate);
        } catch (ParseException e) {
            return false;
        }
    }

    private Date generateRandomDateTime() {
        long offset = new Date(1672589040000L).getTime(); // January 1, 2000 in milliseconds
        long end = new Date(1704211500000L).getTime();    // January 1, 2024 in milliseconds

        long randomTime = offset + (long) (Math.random() * (end - offset + 1));

        return new Date(randomTime);
    }
}
