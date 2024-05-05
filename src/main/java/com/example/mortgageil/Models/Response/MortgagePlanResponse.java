package com.example.mortgageil.Models.Response;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Models.Person;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class MortgagePlanResponse {
    private Long id;
    private MortgagePlanType type;
    private double amount;
    private double interestRate;
    private int duration;
    private int balloonDuration;
    private Person person;
}
