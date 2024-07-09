package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


//NOTE: this class should be fixed!
@Service
public class AmortizationCalculationService {

    public AmortizationSummary calculateForMultipleSchedules(List<AmortizationScheduleService> schedules) {
        double totalAllPayments = 0;
        double totalAllInterest = 0;
        double totalAllPrincipal = 0;
        int totalNumberOfPayments = 0;
        List<Payment> aggregatedPayments = new ArrayList<>();

        for (AmortizationScheduleService schedule : schedules) {
            totalAllPayments += schedule.getTotalPayment();
            totalAllInterest += schedule.getTotalInterest();
            totalAllPrincipal += schedule.getTotalPrincipal();
            aggregatedPayments.addAll(schedule.getPayments());  // Aggregate all payments
            totalNumberOfPayments += schedule.getPayments().size();
        }

        double averagePayment = totalAllPayments / totalNumberOfPayments;

        return new AmortizationSummary(totalAllPayments, totalAllInterest, totalAllPrincipal, averagePayment, aggregatedPayments);
    }
}
