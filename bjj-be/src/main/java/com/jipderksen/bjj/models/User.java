package com.jipderksen.bjj.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * This class <description of functionality>
 *
 * @author jipderksen
 */
@Data
@AllArgsConstructor
public class User {
    private String username;
    private List<Training> trainings;
    private List<RolPartner> rolPartners;
    private Belt belt;

    public User(String username, Belt belt) {
        this.username = username;
        this.trainings = new ArrayList<>();
        this.rolPartners = new ArrayList<>();
        this.belt = belt;
    }

    public boolean addTraining(Training training) {
        return this.trainings.add(training);
    }
    public boolean removeTraining(Date training) {
        Training trainingToRemove = this.trainings.stream()
                .filter(t -> t.getDate().equals(training))
                .findAny()
                .orElse(null);
        return this.trainings.remove(trainingToRemove);
    }

    public boolean addRolPartner(RolPartner rolPartner) {
        return  this.rolPartners.add(rolPartner);
    }
}
