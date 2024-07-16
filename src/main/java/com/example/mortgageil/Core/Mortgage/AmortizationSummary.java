package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;


//NOTE: this class should be fixed!
@Getter
@Setter
@AllArgsConstructor
@Builder
public class AmortizationSummary {
    private double totalPayment;
    private double totalInterest;
    private double totalPrincipal;
    private double paymentsAverage;
    private double maxPayment;
    private double firstPayment;
    private double forecastedTotalInterest;
    private List<Payment> payments;
}
