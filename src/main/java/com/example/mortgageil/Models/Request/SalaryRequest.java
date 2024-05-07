package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Models.Person;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class SalaryRequest {
    private Long personId;
    private double salary;
    private String employer;
    private Date startDate;
    private String jobTitle;


    private Person person;
}
