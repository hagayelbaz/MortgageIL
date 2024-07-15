package com.example.mortgageil.Controller;

import com.example.mortgageil.Core.calc.FinancialMath;
import com.example.mortgageil.Service.api.BoiMortgageService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.stream.Collectors;

import static java.lang.Math.min;
import static org.springframework.http.HttpStatus.INTERNAL_SERVER_ERROR;

@Controller
@RequestMapping("/calc")
@RequiredArgsConstructor
public class WebCalculatorController {

    @Resource(name = "boiMortgageService")
    private BoiMortgageService boiMortgageService;

    // max mortgage for equity and revenue.
    @GetMapping("/1")
    public ResponseEntity<Map<String, Double>> calc1(
            @RequestParam double equity,
            @RequestParam double revenues,
            @RequestParam double periodY) {
        try {
            double calculationResult = min(3 * equity, (revenues / 2) * (periodY * 12) );

            Map<String, Double> response = new HashMap<>();
            response.put("result", calculationResult);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("Error processing GET request: " + e.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).build();
        }
    }

    // max mortgage for refund per month.
    @GetMapping("/2")
    public ResponseEntity<Map<String, Object>> calc2(
            @RequestParam double equity,
            @RequestParam double refund,
            @RequestParam int periodY) {

        try {
            double interest = 4.5;
            interest = FinancialMath.toPercent(interest / 12); // interest per month

            double PV = FinancialMath.PV(interest, periodY*12, refund);
            double maxLoanPossible = 3 * equity;

            PV = min(PV, maxLoanPossible);

            Map<String, Object> response = new HashMap<>();
            response.put("result", (int)PV);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("Error processing GET request: " + e.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).build();
        }
    }

    // interest user will pay for loan, and average refund per month
    @GetMapping("/3")
    public ResponseEntity<Map<String, Object>> calc3(
            @RequestParam double loan,
            @RequestParam int periodY) {

        try {
            // take irr interest. (not calculate the most expensive bank(jerusalem)).
            boiMortgageService.refresh();
            var res = boiMortgageService.getByMortgage("irr")
                    .stream()
                    .filter(bankData -> bankData.getBankCode() != 54)
                    .collect(Collectors.toList());

            double interest = res.stream().mapToDouble(bankData -> Double.valueOf(bankData.getValue())).average().getAsDouble();

            interest = FinancialMath.toPercent(interest / 12); // interest per month

            double PMT = FinancialMath.PMT(interest, periodY*12, loan);

            Map<String, Object> response = new HashMap<>();
            response.put("resultI", (int)PMT*periodY*12 - loan);
            response.put("resultM", (int)PMT);

            return ResponseEntity.ok(response);
        } catch (Exception e) {
            System.err.println("Error processing GET request: " + e.getMessage());
            return ResponseEntity.status(INTERNAL_SERVER_ERROR).build();
        }
    }

    @ExceptionHandler({Exception.class})
    public String handleException(Exception e){ return "redirect:/auth/login?error=Some Error Happened";  }

}
