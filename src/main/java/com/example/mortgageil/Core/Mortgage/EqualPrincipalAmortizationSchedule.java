package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;

import java.util.ArrayList;
import java.util.List;

public class EqualPrincipalAmortizationSchedule extends AmortizationSchedule {


    @Override
    public List<Payment> getPayments() {
        List<Payment> payments = new ArrayList<>();
        double p  = getAmount();
        double r = getInterestRatePerMonth();
        int duration = getDuration();

        for (int month = 0; month < duration; month++) {
            double cpi = FutureData.getFutureCpi(month) + 1;
            double interest = p * r * cpi;
            double principal = (p * cpi) / (duration - month);
            p = p * cpi - principal;
            payments.add(new Payment(principal + interest, p, interest, principal, getStarDate().plusMonths(month)));
        }

        return payments;
    }
}

