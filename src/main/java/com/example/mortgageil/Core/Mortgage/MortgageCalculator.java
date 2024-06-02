package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.contracts.PaymentStrategy;
import com.example.mortgageil.Models.MortgagePlan;

import java.util.List;

public class MortgageCalculator {
    private PaymentStrategy paymentStrategy;

    public List<Payment> calculatePayments(MortgagePlan details) {
        switch (details.getType()) {
            case NON_LINKED_FIXED:
            case PRIME_RATE:
            case VARIABLE_EVERY_FIVE_YEARS:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS:
            case VARIABLE_EVERY_TEN_YEARS:
            case ENTITLEMENT:
                paymentStrategy = new AnnuityPaymentStrategy();
                break;
            case LINKED_FIXED:
            case VARIABLE_EVERY_FIVE_YEARS_LINKED:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED:
            case VARIABLE_EVERY_TEN_YEARS_LINKED:
            case EURO:
                paymentStrategy = new EqualPrincipalPaymentStrategy();
                break;
        }
        return paymentStrategy.calculatePayments(details);
    }
}
