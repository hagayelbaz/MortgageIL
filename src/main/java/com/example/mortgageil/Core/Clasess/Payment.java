package com.example.mortgageil.Core.Clasess;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    private double principal;
    private double interest;
    private double totalPayment;
    private double remainingBalance;
    private LocalDate date;
}
