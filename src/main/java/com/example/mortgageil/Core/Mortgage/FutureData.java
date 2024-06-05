package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Enum.MortgagePlanType;

import java.util.List;

public class FutureData {

    public static double getFutureInterest(MortgagePlanType type) {
        switch (type) {
            case NON_LINKED_FIXED:
                return 0;
            case PRIME_RATE:
                return  + 1.5;
            case VARIABLE_EVERY_FIVE_YEARS:
                return  + 2.5;
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS:
                return  + 3.5;
            case VARIABLE_EVERY_TEN_YEARS:
                return  + 4.5;
            case ENTITLEMENT:
                return  + 5.5;
            case LINKED_FIXED:
                return  + 6.5;
            case VARIABLE_EVERY_FIVE_YEARS_LINKED:
                return  + 7.5;
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED:
                return  + 8.5;
            case VARIABLE_EVERY_TEN_YEARS_LINKED:
                return  + 9.5;
            case EURO:
                return  + 10.5;
            default:
                return 1;
        }
    }

    public static double getFutureCpi(int month) {
        return Math.pow(1.5 / 100 + 1, 1f / 12f) - 1;
    }

}
