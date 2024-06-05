package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.calc.FinancialMath;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

public class AnnuityAmortizationSchedule extends AmortizationSchedule {

    @Override
    public List<Payment> getPayments() {
        List<Payment> payments = new ArrayList<>();
        double p  = getAmount();
        double r = getInterestRatePerMonth();
        int duration = getDuration();

        for (int month = 0; month < duration; month++) {
            double cpi = FutureData.getFutureCpi(month) + 1;
            double interest = p * r * cpi;
            double pmt = FinancialMath.PMT(r, duration - month, p * cpi);
            double principal = pmt - interest;
            p = p * cpi - principal;
            payments.add(new Payment(pmt, p, interest, principal, getMortgageDetails().getStartDate().plusMonths(month)));
        }
        return payments;
    }
}


