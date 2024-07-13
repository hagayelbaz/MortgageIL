package com.example.mortgageil.Models.DTO;

import com.example.mortgageil.Core.Enum.LoanType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class LoanDataDTO {
    private Long id;
    private LoanType loanType;
    private double loanAmount;
    private double equity;
    private int numberOfApartments;
    private boolean intendsToSellWithin18Months;
    private boolean isFirstApartmentPurchase;
    private String typeDescription;
    private Long userId;
    private UserDTO user;
}
