package com.example.mortgageil.Controller.API.V1.Internal.calc;


import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Mortgage.AmortizationSchedule;
import com.example.mortgageil.Core.Mortgage.AmortizationScheduleFactory;
import com.example.mortgageil.Models.MortgagePlan;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;

@RestController
@RequestMapping("/api/v1/internal/calc/mortgage")
public class MortgageController {


    @GetMapping("/annuity")
    public ResponseEntity<?> annuity(@RequestParam double amount, @RequestParam double interestRate, @RequestParam int duration) {
        MortgagePlan mortgagePlan = new MortgagePlan();
        mortgagePlan.setAmount(amount);
        mortgagePlan.setInterestRate(interestRate);
        mortgagePlan.setDuration(duration);
        mortgagePlan.setStartDate(LocalDate.now());
        mortgagePlan.setType(MortgagePlanType.LINKED_FIXED);
        AmortizationSchedule amortizationSchedule = AmortizationScheduleFactory.get(mortgagePlan.getType());
        amortizationSchedule.load(mortgagePlan);
        return ResponseEntity.ok(amortizationSchedule.getPayments());
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok("test");
    }
}
