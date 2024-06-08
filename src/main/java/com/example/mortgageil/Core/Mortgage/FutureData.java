package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Service.api.BoiService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class FutureData {

    @Resource(name = "boiService")
    private BoiService boiService;

    public double getFutureInterest(MortgagePlanType type) {
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

    public double getFutureCpi(int month) {
        try {
            var test = boiService.test(month).get("value").asDouble();
            return test;//FinancialMath.cpiMonthly(test) +1;
        }catch (Exception e) {
            throw new RuntimeException("Failed to get future cpi");
        }
    }

}
