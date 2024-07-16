package com.example.mortgageil.Models.DTO;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Enum.ScheduleType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;


@Getter
@Setter
public class MortgagePlanDTO {
    private Long id;
    private Long mortgageGroupId;
    private MortgagePlanType type;
    private ScheduleType scheduleType;
    private Double amount;
    private Double interestRate;
    private Integer duration;
    private Integer balloonDuration;
    private LocalDate startDate;
    private String typeDescription;
    private MortgageGroupDTO mortgageGroup;
}
