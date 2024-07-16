package com.example.mortgageil.Controller.API.V1.Internal.calc;


import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Mortgage.*;
import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Service.db.MortgageGroupService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Set;


@RestController
@RequestMapping("/api/v1/internal/calc/mortgage")
public class MortgageController {

    @Resource(name = "mortgageGroupService")
    private MortgageGroupService mortgageGroupService;

    @Resource(name = "amortizationCalculationService")
    private AmortizationCalculationService amortizationCalculationService;



    @GetMapping("/amortization-schedule/{id}")
    public ResponseEntity<?> amortizationSchedule(@PathVariable long id) {
        var selectedGroup = mortgageGroupService.getById(id);
        var summary = amortizationCalculationService.calculateForMortgageGroup(selectedGroup);
        return ResponseEntity.ok(summary);
    }

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        double [] values = {-100,40,59,55,20};
        var irr = FinancialMath.IRR(values);
        return ResponseEntity.ok(irr);
    }
}
