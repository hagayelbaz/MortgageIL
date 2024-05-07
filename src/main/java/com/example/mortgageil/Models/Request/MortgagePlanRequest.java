package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Models.Person;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MortgagePlanRequest {

    @NotEmpty(message = "user id is required")
    private Long personId;

    @NotEmpty(message = "Mortgage plan type is required")
    private MortgagePlanType type;

    @NotEmpty(message = "amount is required")
    private double amount;

    @NotEmpty(message = "Interest rate is required")
    private double interestRate;

    @NotEmpty(message = "Duration is required")
    private int duration;

    private int balloonDuration;

    private Person person;
}
