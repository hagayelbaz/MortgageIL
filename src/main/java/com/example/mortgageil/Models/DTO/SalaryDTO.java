package com.example.mortgageil.Models.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class SalaryDTO {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private Long personId;
    private double salary;
    private String employer;
    private Date startDate;
    private String jobTitle;
    private String description;
    private PersonDTO person;
}
