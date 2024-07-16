package com.example.mortgageil.Core.contracts;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Enum.ScheduleType;
import com.example.mortgageil.Core.Mortgage.AmortizationScheduleService;

public interface IAmortizationScheduleFactory {
    AmortizationScheduleService get(ScheduleType scheduleType);
}
