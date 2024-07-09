package com.example.mortgageil.Controller.API.V1.Internal.calc;


import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Mortgage.*;
import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Models.DTO.MortgagePlanDTO;
import com.example.mortgageil.Models.Mapper.MortgagePlanMapper;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Service.db.MortgageGroupService;
import com.example.mortgageil.Service.db.MortgagePlanService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;


@RestController
@RequestMapping("/api/v1/internal/calc/mortgage")
public class MortgageController {

    @Resource(name = "amortizationScheduleFactory")
    private AmortizationScheduleFactory amortizationScheduleFactory;

    @Resource(name = "mortgageGroupService")
    private MortgageGroupService mortgageGroupService;


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

    @GetMapping("/amortization-schedule/{id}")
    public ResponseEntity<?> amortizationSchedule(@PathVariable long id) {
        var plans = mortgageGroupService.getById(id).getMortgagePlans();
        List<AmortizationScheduleService> schedules = new ArrayList<>();
        for (var plan : plans) {
            var amortizationSchedule = amortizationScheduleFactory.get(plan.getType());
            amortizationSchedule.load(plan);
            schedules.add(amortizationSchedule);
        }

        AmortizationCalculationService calculationService = new AmortizationCalculationService();
        AmortizationSummary summary = calculationService.calculateForMultipleSchedules(schedules);
        return ResponseEntity.ok(summary);
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        double [] values = {-100,40,59,55,20};
        var irr = FinancialMath.IRR(values);
        return ResponseEntity.ok(irr);
    }
}
