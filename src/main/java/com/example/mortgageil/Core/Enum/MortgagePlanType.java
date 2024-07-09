package com.example.mortgageil.Core.Enum;


import lombok.Getter;

@Getter
public enum MortgagePlanType {
    NON_LINKED_FIXED("קבועה לא צמודה"),
    LINKED_FIXED("קבועה צמודה"),
    PRIME_RATE("פריים"),
    VARIABLE_EVERY_FIVE_YEARS("משתנה כל 5 שנים לא צמודה"),
    VARIABLE_EVERY_TWO_AND_HALF_YEARS("משתנה כל 2.5 שנים לא צמודה"),
    VARIABLE_EVERY_TEN_YEARS("משתנה כל 10 שנים לא צמודה"),
    VARIABLE_EVERY_FIVE_YEARS_LINKED("משתנה כל 5 שנים צמודה"),
    VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED("משתנה כל 2.5 שנים צמודה"),
    VARIABLE_EVERY_TEN_YEARS_LINKED("משתנה כל 10 שנים צמודה"),
    ENTITLEMENT("זכאות"),
    EURO("יורו");


    private final String type;

    MortgagePlanType(String type) {
        this.type = type;
    }

}
