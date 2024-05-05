package com.example.mortgageil.Models.Response;


import com.example.mortgageil.Models.Person;
import com.example.mortgageil.Models.User;
import lombok.*;

import java.util.Date;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SalaryResponse {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private Person person;
    private double salary;
    private String employer;
    private Date startDate;
    private String jobTitle;
}
