package com.example.mortgageil.Core.Enum;

import lombok.Getter;

@Getter
public enum LoanType {
    APARTMENT("דירה"),
    LAND("מגרש"),
    SELF_BUILD("בניית עצמית"),
    REFINANCING("מחזור"),
    ANY("כל מטרה")
    ;


    private final String type;

    LoanType(String type) {
        this.type = type;
    }
}
