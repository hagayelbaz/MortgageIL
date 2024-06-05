package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.contracts.IPaymentStrategy;
import com.example.mortgageil.Models.MortgagePlan;
import lombok.Getter;

import java.time.LocalDate;
import java.util.List;

public abstract class AmortizationSchedule implements IPaymentStrategy {

    private MortgagePlan mortgageDetails;
    private List<Payment> payments;
    @Getter
    private double paymentsAverage;
    @Getter
    private double totalInterest;
    @Getter
    private double totalPayment;
    @Getter
    private double totalPrincipal;

    public void load(MortgagePlan mortgagePlan) {
        this.mortgageDetails = mortgagePlan;
        this.payments = getPayments();
        calc();
    }

    protected double getFutureInterest(int month){
        return FutureData.getFutureInterest(mortgageDetails.getType());
    }

    protected double getFutureCpi(int month){
        return FutureData.getFutureCpi(month);
    }

    protected MortgagePlan getMortgageDetails() {
        return mortgageDetails;
    }

    protected double getInterestRate(){
        return mortgageDetails.getInterestRate();
    }

    protected double getAmount(){
        return mortgageDetails.getAmount();
    }

    protected int getDuration(){
        return mortgageDetails.getDuration();
    }

    protected double getInterestRatePerMonth(){
        return mortgageDetails.getInterestRate() / 12 / 100;
    }

    protected LocalDate getStarDate(){
        return mortgageDetails.getStartDate();
    }


    private void calc(){
        calcAverage();
        calcTotalInterest();
        calcTotalPayment();
        calcTotalPrincipal();
    }

    private void calcAverage(){
        paymentsAverage = payments.stream().mapToDouble(Payment::getPayment).average().orElse(0);
    }

    private void calcTotalInterest(){
        totalInterest = payments.stream().mapToDouble(Payment::getInterestPaid).sum();
    }

    private void calcTotalPayment(){
        totalPayment = payments.stream().mapToDouble(Payment::getPayment).sum();
    }

    private void calcTotalPrincipal(){
        totalPrincipal = payments.stream().mapToDouble(Payment::getPrincipalPaid).sum();
    }
}
