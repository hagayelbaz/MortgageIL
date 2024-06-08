package com.example.mortgageil.Controller.API.V1.Internal.calc;


import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Mortgage.AmortizationScheduleFactory;
import com.example.mortgageil.Core.Mortgage.FutureData;
import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Models.MortgagePlan;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;


@RestController
@RequestMapping("/api/v1/internal/calc/mortgage")
public class MortgageController {

    @Resource(name = "amortizationScheduleFactory")
    private AmortizationScheduleFactory amortizationScheduleFactory;


    @GetMapping("/annuity")
    public ResponseEntity<?> annuity(@RequestParam double amount, @RequestParam double interestRate, @RequestParam int duration) {
        MortgagePlan mortgagePlan = new MortgagePlan();
        mortgagePlan.setAmount(amount);
        mortgagePlan.setInterestRate(interestRate);
        mortgagePlan.setDuration(duration);
        mortgagePlan.setStartDate(LocalDate.now());
        mortgagePlan.setType(MortgagePlanType.NON_LINKED_FIXED);
        var amortizationSchedule = amortizationScheduleFactory.get(MortgagePlanType.NON_LINKED_FIXED);
        amortizationSchedule.load(mortgagePlan);
        return ResponseEntity.ok(amortizationSchedule);//
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        double [] values = {-100,40,59,55,20};
        var irr = FinancialMath.IRR(values);
        return ResponseEntity.ok(irr);
    }
}
