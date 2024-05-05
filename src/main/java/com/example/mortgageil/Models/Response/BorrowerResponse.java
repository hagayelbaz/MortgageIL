package com.example.mortgageil.Models.Response;

import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Salary;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.Set;

@Getter
@Setter
@Builder
public class BorrowerResponse {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private String firstName;
    private String lastName;
    private Set<Salary> salaries;
    private Set<BorrowerLiabilities> borrowerLiabilities;
    private Set<MortgagePlan> mortgagePlans;
}
