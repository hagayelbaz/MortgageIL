package com.example.mortgageil.Models.DTO;

import com.example.mortgageil.Core.Enum.LoanType;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
public class LoanDataDTO {
    private Long id;
    private LoanType loanType;
    private double loanAmount;
    private double apartmentPrice;
    private double equity;
    private int numberOfApartments;
    private boolean intendsToSellWithin18Months;
    private boolean isFirstApartmentPurchase;
    private boolean isPerOccupantApartment;
    private double marketPrice;
    private double contractPrice;
    private double earlyRepayment;
    private LocalDate earlyRepaymentDate;
    private String city;
    private String typeDescription;
    private Long userId;
    private UserDTO user;
}
