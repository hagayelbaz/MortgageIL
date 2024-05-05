package com.example.mortgageil.Models.Response;

import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Salary;
import lombok.*;

import java.util.Date;
import java.util.Set;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class UserResponse {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Set<Salary> salaries;
    private Set<BorrowerLiabilities> borrowerLiabilities;
    private Set<MortgagePlan> mortgagePlans;
}
