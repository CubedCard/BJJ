package com.jipderksen.bjj.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;

/**
 * This class <description of functionality>
 *
 * @author jipderksen
 */
@Data
@AllArgsConstructor
public class Training {
    private Date date;
    private int duration;
    private int numberOfRounds;
    private String technique;
    private String notes;
}
