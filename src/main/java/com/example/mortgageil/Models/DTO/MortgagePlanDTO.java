package com.example.mortgageil.Models.DTO;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
public class MortgagePlanDTO {
    private Long id;
    private Long mortgageGroupId;
    private MortgagePlanType type;
    private Double amount;
    private Double interestRate;
    private Integer duration;
    private Integer balloonDuration;
    private LocalDate startDate;
    private String typeDescription;
    private MortgageGroupDTO mortgageGroup;
}
