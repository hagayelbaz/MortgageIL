package com.example.mortgageil.Core.calc;


public class FinancialMath {


    public static double PMT(double rate, int nper, double pv) {
        return pv * rate / (1 - Math.pow(1 + rate, -nper));
    }

    public static double toPercent(double rate){
        return rate / 100;
    }
}
