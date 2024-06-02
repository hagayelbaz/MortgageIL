package com.example.mortgageil.Core.contracts;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Models.MortgagePlan;

import java.util.List;

public interface PaymentStrategy {
    List<Payment> calculatePayments(MortgagePlan mortgageDetails);
}
