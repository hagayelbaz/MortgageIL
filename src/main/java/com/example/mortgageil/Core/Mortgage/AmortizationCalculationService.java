package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Models.MortgageGroup;
import com.example.mortgageil.Models.MortgagePlan;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;


//NOTE: this class should be fixed!
@Service
public class AmortizationCalculationService {

    @Resource(name = "amortizationScheduleFactory")
    private AmortizationScheduleFactory amortizationScheduleFactory;


    public AmortizationSummary calculateForMortgageGroup(MortgageGroup mortgageGroup) {
        List<AmortizationScheduleService> schedules = new ArrayList<>();
        var plans = mortgageGroup.getMortgagePlans();
        for (MortgagePlan plan : plans) {
            var schedule = amortizationScheduleFactory
                    .get(plan.getType())
                    .setMortgagePlan(plan);
            schedules.add(schedule);
        }
        return calculateForMultipleSchedules(schedules);
    }

    public AmortizationSummary calculateForMultipleSchedules(List<AmortizationScheduleService> schedules) {
        double totalPayment = 0;
        double totalInterest = 0;
        double totalPrincipal = 0;
        double maxPayment = 0;
        double averagePayment = 0;
        double firstPayment = 0;
        double forecastedTotalInterest = 0;

        Map<LocalDate, Payment> combinedPayments = new TreeMap<>();

        for (AmortizationScheduleService schedule : schedules) {
            totalPayment += schedule.getTotalPayment();
            totalInterest += schedule.getTotalInterest();
            totalPrincipal += schedule.getTotalPrincipal();
            maxPayment = Math.max(maxPayment, schedule.getMaxPayment());
            averagePayment += schedule.getAveragePayment();
            firstPayment += schedule.getFirstPayment();
            forecastedTotalInterest += schedule.getForecastedTotalInterest();

            for (Payment payment : schedule.getPayments()) {
                LocalDate date = payment.getDate();
                combinedPayments.merge(date, payment, (existing, newPayment) -> {
                    return new Payment(
                            existing.getPayment() + newPayment.getPayment(),
                            existing.getRemainingBalance() + newPayment.getRemainingBalance(),
                            existing.getInterestPaid() + newPayment.getInterestPaid(),
                            existing.getPrincipalPaid() + newPayment.getPrincipalPaid(),
                            date
                    );
                });
            }
        }

        averagePayment /= schedules.size();

        List<Payment> sortedCombinedPayments = new ArrayList<>(combinedPayments.values());

        return AmortizationSummary.builder()
                .totalPayment(totalPayment)
                .totalInterest(totalInterest)
                .totalPrincipal(totalPrincipal)
                .paymentsAverage(averagePayment)
                .maxPayment(maxPayment)
                .firstPayment(firstPayment)
                .forecastedTotalInterest(forecastedTotalInterest)
                .payments(sortedCombinedPayments)
                .build();
    }
}
