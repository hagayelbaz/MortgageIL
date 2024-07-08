package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class AmortizationSummary {
    private final double totalPayment;
    private final double totalInterest;
    private final double totalPrincipal;
    private final double paymentsAverage;
    private final List<Payment> payments;

    public AmortizationSummary(double totalPayment, double totalInterest, double totalPrincipal, double paymentsAverage, List<Payment> payments) {
        this.totalPayment = totalPayment;
        this.totalInterest = totalInterest;
        this.totalPrincipal = totalPrincipal;
        this.paymentsAverage = paymentsAverage;
        this.payments = payments;
    }
}
