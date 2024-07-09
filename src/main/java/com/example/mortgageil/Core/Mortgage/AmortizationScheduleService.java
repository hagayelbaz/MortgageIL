package com.example.mortgageil.Core.Mortgage;

import com.example.mortgageil.Core.Clasess.Payment;
import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Core.contracts.IPaymentStrategy;
import com.example.mortgageil.Models.MortgagePlan;
import jakarta.annotation.Resource;
import lombok.Getter;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.util.List;


//NOTE: fix it carefully!!!!!!!!!!!!!!
@Component
public abstract class AmortizationScheduleService implements IPaymentStrategy {

    @Resource(name = "futureData")
    protected FutureData futureData;

    private MortgagePlan mortgageDetails;

    private List<Payment> payments;


    public AmortizationScheduleService setMortgagePlan(MortgagePlan mortgagePlan) {
        this.mortgageDetails = mortgagePlan;
        this.payments = getPayments();
        return this;
    }

    public double getMaxPayment() {
        return payments.stream().mapToDouble(Payment::getPayment).max().orElse(0);
    }

    public double getFirstPayment() {
        return payments.stream().mapToDouble(Payment::getPayment).findFirst().orElse(0);
    }

    public double getCpi() {
        switch (mortgageDetails.getType()) {
            case NON_LINKED_FIXED:
            case PRIME_RATE:
            case VARIABLE_EVERY_FIVE_YEARS:
            case EURO:
            case VARIABLE_EVERY_TEN_YEARS:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS:
                return 0;
            case LINKED_FIXED:
            case ENTITLEMENT:
            case VARIABLE_EVERY_TEN_YEARS_LINKED:
            case VARIABLE_EVERY_TWO_AND_HALF_YEARS_LINKED:
            case VARIABLE_EVERY_FIVE_YEARS_LINKED:
                return getFutureCpi(mortgageDetails.getDuration());
            default:
                throw new IllegalArgumentException("Unexpected value: " + mortgageDetails.getType());
        }
    }

    public double getAveragePayment() {
        return payments.stream().mapToDouble(Payment::getPayment).average().orElse(0);
    }

    public double getTotalPayment() {
        return payments.stream().mapToDouble(Payment::getPayment).sum();
    }

    public double getTotalInterest() {
        return payments.stream().mapToDouble(Payment::getInterestPaid).sum();
    }

    public double getTotalPrincipal() {
        return payments.stream().mapToDouble(Payment::getPrincipalPaid).sum();
    }


    public double getForecastedTotalInterest() {
        return FinancialMath
                .ForecastedTotalInterest(mortgageDetails.getAmount(),
                        payments.stream().mapToDouble(Payment::getPayment).toArray());
    }

    protected double getFutureInterest(int month) {
        return futureData.getFutureInterest(mortgageDetails.getType());
    }

    protected double getFutureCpi(int month) {
        return futureData.getFutureCpi(month);
    }

    protected MortgagePlan getMortgageDetails() {
        return mortgageDetails;
    }

    protected double getInterestRate() {
        return mortgageDetails.getInterestRate();
    }

    protected double getAmount() {
        return mortgageDetails.getAmount();
    }

    protected int getDuration() {
        return mortgageDetails.getDuration();
    }

    protected double getInterestRatePerMonth() {
        return mortgageDetails.getInterestRate() / 12 / 100;
    }

    protected LocalDate getStarDate() {
        return mortgageDetails.getStartDate();
    }

}
