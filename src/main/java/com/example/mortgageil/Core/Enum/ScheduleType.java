package com.example.mortgageil.Core.Enum;

import lombok.Getter;

@Getter
public enum ScheduleType {
    ANNUITY("שפיצר"),
    EQUAL_PRINCIPAL("קרן שווה")
    ;

    private final String type;

    ScheduleType(String type) {
        this.type = type;
    }
}
