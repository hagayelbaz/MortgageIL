package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.contracts.PaymentStrategy;
import com.example.mortgageil.Models.MortgagePlan;

import java.util.ArrayList;
import java.util.List;

public class AnnuityPaymentStrategy implements PaymentStrategy {
    @Override
    public List<Payment> calculatePayments(MortgagePlan details) {
        List<Payment> payments = new ArrayList<>();
        double monthlyInterestRate = details.getInterestRate() / 12 / 100;
        int totalPayments = details.getDuration();
        double loanAmount = details.getAmount();

        // Calculate monthly payment
        double monthlyPayment = (loanAmount * monthlyInterestRate) /
                (1 - Math.pow(1 + monthlyInterestRate, -totalPayments));

        double remainingBalance = loanAmount;
        for (int i = 0; i < totalPayments; i++) {
            double interest = remainingBalance * monthlyInterestRate;
            double principal = monthlyPayment - interest;
            remainingBalance -= principal;
            payments.add(new Payment(principal, interest, monthlyPayment, remainingBalance, details.getStartDate().plusMonths(i)));
        }
        return payments;
    }
}
