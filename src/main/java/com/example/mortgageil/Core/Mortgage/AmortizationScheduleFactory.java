package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.contracts.IAmortizationScheduleFactory;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;


@Component
public class AmortizationScheduleFactory implements IAmortizationScheduleFactory {

    @Resource(name = "annuityAmortizationScheduleService")
    private AnnuityAmortizationScheduleService annuityAmortizationScheduleService;

    @Resource(name = "equalPrincipalAmortizationScheduleService")
    private EqualPrincipalAmortizationScheduleService equalPrincipalAmortizationScheduleService;

    public AmortizationScheduleService get(MortgagePlanType mortgagePlanType) {
        switch (mortgagePlanType) {
            case NON_LINKED_FIXED:
            case PRIME_RATE:
            case VARIABLE_EVERY_FIVE_YEARS:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS:
            case VARIABLE_EVERY_TEN_YEARS:
            case ENTITLEMENT:
                return annuityAmortizationScheduleService;
            case LINKED_FIXED:
            case VARIABLE_EVERY_FIVE_YEARS_LINKED:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED:
            case VARIABLE_EVERY_TEN_YEARS_LINKED:
            case EURO:
                return equalPrincipalAmortizationScheduleService;
        }
        throw new IllegalArgumentException("Unsupported mortgage plan type");
    }
}
