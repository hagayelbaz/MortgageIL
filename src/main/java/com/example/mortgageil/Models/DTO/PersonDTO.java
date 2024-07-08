package com.example.mortgageil.Models.DTO;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class PersonDTO {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private String firstName;
    private String lastName;
    private Set<SalaryDTO> salaries;
}