package com.jipderksen.bjj.models;

import lombok.AllArgsConstructor;
import lombok.Data;

/**
 * This class <description of functionality>
 *
 * @author jipderksen
 */
@Data
@AllArgsConstructor
public class RolPartner {
    private String name;
    private Belt belt;
    private boolean gender;
}
