package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Salary;
import com.example.mortgageil.Models.User.User;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Builder
public class BorrowerRequest {

    private Long id;

    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    private String lastName;

    private String email;

    private String phoneNumber;

    private Set<SalaryRequest> salaries;

    private Set<BorrowerLiabilitiesRequest> borrowerLiabilities;

    private Set<MortgagePlanRequest> mortgagePlans;

    private User user;
}
