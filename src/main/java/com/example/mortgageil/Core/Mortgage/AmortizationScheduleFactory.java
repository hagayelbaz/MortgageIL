package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Enum.ScheduleType;
import com.example.mortgageil.Core.contracts.IAmortizationScheduleFactory;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.WebApplicationContext;


@Component
public class AmortizationScheduleFactory implements IAmortizationScheduleFactory {

    @Autowired
    private WebApplicationContext webApplicationContext;

    public AmortizationScheduleService get(ScheduleType scheduleType) {
        switch (scheduleType) {
            case ANNUITY:
                return webApplicationContext.getBean(AnnuityAmortizationScheduleService.class);
            case EQUAL_PRINCIPAL:
                return webApplicationContext.getBean(EqualPrincipalAmortizationScheduleService.class);
        }
        throw new IllegalArgumentException("Unsupported mortgage plan type");
    }
}
