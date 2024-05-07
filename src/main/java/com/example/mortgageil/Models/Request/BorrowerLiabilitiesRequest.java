package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Models.Person;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class BorrowerLiabilitiesRequest {

    @NotEmpty(message = "user id is required")
    private Long personId;

    @NotEmpty(message = "amount is required")
    private double amount;

    @NotEmpty(message = "end date is required")
    private Date endDate;

    private Person person;
}
