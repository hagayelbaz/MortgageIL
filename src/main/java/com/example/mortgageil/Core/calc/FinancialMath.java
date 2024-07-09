package com.example.mortgageil.Core.calc;


public class FinancialMath {


    public static double PMT(double rate, int nper, double pv) {
        return pv * rate / (1 - Math.pow(1 + rate, -nper));
    }

    public static double toPercent(double rate){
        return rate / 100;
    }

    public static double FV(double rate, int nper, double pmt) {
        return pmt * (Math.pow(1 + rate, nper) - 1) / rate;
    }

    public static double PV(double rate, int nper, double pmt) {
        return pmt / rate * (1 - Math.pow(1 + rate, -nper));
    }

    public static double NPV(double rate, double[] values) {
        double npv = 0;
        for (int i = 0; i < values.length; i++) {
            npv += values[i] / Math.pow(1 + rate, i);
        }
        return npv;
    }

    public static double IRR(double[] values) {
        double min = -1.0;
        double max = 1.0;
        double precision = 0.000000001;//SUGGEST: maybe smaller?

        while ((max - min) > precision) {
            double midpoint = (min + max) / 2;
            double npv = NPV(midpoint, values);

            if (npv > 0) {
                min = midpoint;
            } else {
                max = midpoint;
            }

            if (Math.abs(npv) < precision) {
                return midpoint;
            }
        }

        return (min + max) / 2;
    }

    public static double ForecastedTotalInterest(double principle, double [] pmts) {
        double [] values = new double[pmts.length + 1];
        values[0] = -principle;
        System.arraycopy(pmts, 0, values, 1, pmts.length);
        return (Math.pow(1 + IRR(values), 12) - 1) * 100;
    }

    public static double cpiMonthly(double cpi){
        return Math.pow(1 + cpi / 100, 1.0 / 12) - 1;
    }

}
