package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Models.MortgagePlan;

public class AmortizationScheduleFactory {

    public static AmortizationSchedule get(MortgagePlanType mortgagePlanType) {
        AmortizationSchedule amortizationSchedule = null;
        switch (mortgagePlanType) {
            case NON_LINKED_FIXED:
            case PRIME_RATE:
            case VARIABLE_EVERY_FIVE_YEARS:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS:
            case VARIABLE_EVERY_TEN_YEARS:
            case ENTITLEMENT:
                amortizationSchedule = new AnnuityAmortizationSchedule();
                break;
            case LINKED_FIXED:
            case VARIABLE_EVERY_FIVE_YEARS_LINKED:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED:
            case VARIABLE_EVERY_TEN_YEARS_LINKED:
            case EURO:
                amortizationSchedule = new EqualPrincipalAmortizationSchedule();
                break;
        }
        return amortizationSchedule;
    }
}
