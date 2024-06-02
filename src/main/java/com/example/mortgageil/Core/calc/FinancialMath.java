package com.example.mortgageil.Core.calc;

public class FinancialMath {

    public static double PV(double rate, int nper, double pmt, double fv, boolean type) {
        double pv = 0;
        if (rate == 0) {
            pv = -fv - (pmt * nper);
        } else {
            double r1 = rate + 1;
            pv = ((1 - Math.pow(r1, nper)) * (type ? 1 : r1) * pmt) / rate + fv / Math.pow(r1, nper);
        }
        return pv;
    }

    public static double PMT(double rate, int nper, double pv, double fv, boolean type) {
        double pmt = 0;
        if (rate == 0) {
            pmt = -(pv + fv) / nper;
        } else {
            double r1 = rate + 1;
            double factor = (Math.pow(r1, nper) - 1) / (rate * Math.pow(r1, nper));
            pmt = -(pv + fv / Math.pow(r1, nper)) / (factor * (type ? r1 : 1));
        }
        return pmt;
    }


    public static double FV(double rate, int nper, double pmt, double pv, boolean type) {
        double fv = 0;
        if (rate == 0) {
            fv = -pv - (pmt * nper);
        } else {
            double r1 = rate + 1;
            double factor = (1 - Math.pow(r1, nper)) / rate;
            fv = pv * Math.pow(r1, nper) + pmt * factor * (type ? r1 : 1);
        }
        return fv;
    }


    public static double NPER(double rate, double pmt, double pv, double fv, boolean type) {
        double nper = 0;
        if (rate == 0) {
            nper = -(fv + pv) / pmt;
        } else {
            double r1 = rate + 1;
            double r = (pmt * (type ? r1 : 1) + pv * rate) / (pmt * (type ? r1 : 1) + fv * rate);
            nper = Math.log(r) / Math.log(r1);
        }
        return nper;
    }


    public static double RATE(int nper, double pmt, double pv, double fv, boolean type, double guess) {
        double rate = guess;
        double f = 0;
        double y = 0, y0 = pv + pmt * nper + fv;
        double x0 = 0, x1 = guess;
        int i = 0;

        do {
            if (rate == 0) {
                y = pv + pmt * nper + fv;
            } else {
                f = Math.exp(nper * Math.log(1 + rate));
                y = pv * f + pmt * (1 + rate * (type ? 1 : 0)) * (f - 1) / rate + fv;
            }
            if (i > 0) {
                if (Math.abs(y) < 0.0000001) {
                    break;
                }
                double temp = rate;
                rate = x1 - (y * (x1 - x0) / (y - y0));
                x0 = x1;
                x1 = temp;
                y0 = y;
            }
            i++;
        } while (Math.abs(y) > 0.0000001 && i < 1000);

        return rate;
    }


    public static double IPM(double rate, int per, int nper, double pv, double fv, boolean type) {
        double ipmt = 0;
        if (rate == 0) {
            ipmt = -pv / nper;
        } else {
            double pmt = PMT(rate, nper, pv, fv, type);
            double pvPer = pv;
            // Compute the balance remaining after (per-1) payments
            for (int i = 1; i < per; i++) {
                if (type) {
                    pvPer = (pvPer + pmt) * (1 + rate);
                } else {
                    pvPer = pvPer * (1 + rate) + pmt;
                }
            }
            ipmt = -pvPer * rate;
            if (type) {
                ipmt /= (1 + rate); // Adjust the IPMT if payments are made at the beginning of the period
            }
        }
        return ipmt;
    }


    public static double PPMT(double rate, int per, int nper, double pv, double fv, boolean type) {
        double ppmt = 0;
        if (rate == 0) {
            ppmt = -pv / nper;
        } else {
            double pmt = PMT(rate, nper, pv, fv, type);
            double balance = pv;
            // Calculate the remaining balance after (per-1) payments
            for (int i = 1; i < per; i++) {
                if (type) {
                    balance = (balance + pmt) * (1 + rate);  // Payments at the beginning of the period
                } else {
                    balance = balance * (1 + rate) + pmt;    // Payments at the end of the period
                }
            }
            double interest = balance * rate;  // Calculate interest based on the balance before this period's payment
            ppmt = pmt - interest;
            if (type && per == 1) {
                ppmt = pmt;  // If it's the first period and payments are at the start, the entire payment is principal
            }
        }
        return ppmt;
    }


    public static double CUMIPMT(double rate, int startPer, int endPer, int nper, double pv, double fv, boolean type) {
        double cumipmt = 0;
        for (int i = startPer; i <= endPer; i++) {
            cumipmt += IPMT(rate, i, nper, pv, fv, type);
        }
        return cumipmt;
    }

    private static double IPMT(double rate, int i, int nper, double pv, double fv, boolean type) {
        if (rate == 0) {
            return -pv / nper;  // If the rate is 0, all payments are equal and consist entirely of principal.
        }
        double pmt = PMT(rate, nper, pv, fv, type); // Calculate total periodic payment
        double balance = pv; // Starting balance before any payments
        // Calculate the balance remaining after (i-1) payments
        for (int j = 1; j < i; j++) {
            if (type) {
                balance = (balance + pmt) * (1 + rate);  // Payments at the beginning of the period
            } else {
                balance = balance * (1 + rate) + pmt;    // Payments at the end of the period
            }
        }
        // Calculate the interest component of the i-th payment
        double interest = balance * rate;
        if (type && i == 1) {
            interest = 0;  // If it's the first period and payments are at the beginning, there's no interest component
        }
        return -interest; // Return as a positive number to indicate cash outflow
    }


    public static double CUMPRINC(double rate, int per, int nper, double pv, double fv, boolean type) {
        double cumprinc = 0;
        // Loop through each payment period up to 'per'
        for (int i = 1; i <= per; i++) {
            cumprinc += PPMT(rate, i, nper, pv, fv, type);  // Add the principal part of the payment for period 'i'
        }
        return cumprinc;
    }


    public static double EFFECT(double rate, int nper) {
        return Math.pow(1 + rate / nper, nper) - 1;
    }

    public static double NOMINAL(double rate, int nper) {
        return (Math.pow(1 + rate, 1.0 / nper) - 1) * nper;
    }

    public static double IRR(double[] cashFlows, double guess) {
        final double tol = 1e-6;
        final int maxIter = 1000;
        double x0 = guess;
        double x1 = 0.0;
        double npv;
        double deriv;

        for (int i = 0; i < maxIter; i++) {
            npv = 0.0;
            deriv = 0.0;
            for (int j = 0; j < cashFlows.length; j++) {
                npv += cashFlows[j] / Math.pow(1 + x0, j);
                deriv += -j * cashFlows[j] / Math.pow(1 + x0, j + 1);
            }

            x1 = x0 - npv / deriv;
            if (Math.abs(x1 - x0) < tol) {
                return x1;
            }
            x0 = x1;
        }
        return Double.NaN;
    }

    public static double ROI(double investment, double gain) {
        return (gain - investment) / investment;
    }
}
