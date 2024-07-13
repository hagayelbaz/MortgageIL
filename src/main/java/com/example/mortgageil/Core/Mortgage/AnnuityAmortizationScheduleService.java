package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.calc.FinancialMath;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

@Service
public class AnnuityAmortizationScheduleService extends AmortizationScheduleService {

    @Override
    public List<Payment> getPayments() {
        List<Payment> payments = new ArrayList<>();
        double p = getAmount();
        double r = getInterestRatePerMonth();
        int duration = getDuration();
        double cpi = FinancialMath.cpiMonthly(getCpi()) + 1;
        var startDate = getMortgageDetails().getStartDate();

        for (int month = 0; month < duration; month++) {
            double pmt = FinancialMath.PMT(r, duration - month, p);
            p = (p * cpi) - (pmt - (p * r));
            payments.add(new Payment(pmt, p, p * r, pmt - (p * r), startDate.plusMonths(month)));
        }
        return payments;
    }
}


