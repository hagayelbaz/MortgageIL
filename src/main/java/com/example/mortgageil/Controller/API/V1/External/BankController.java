package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.api.BoiMortgageService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/bank", produces = "application/json")
public class BankController {

    @Resource(name = "boiMortgageService")
    private BoiMortgageService boiMortgageService;


    @GetMapping("/best-bank")
    public ResponseEntity<?> getTheBestBank() {
        boiMortgageService.refresh();
        return ResponseEntity.ok(boiMortgageService.getTheBestBank());
    }

    @GetMapping("/all-banks")
    public ResponseEntity<?> getAllBanks() {
        boiMortgageService.refresh();
        return ResponseEntity.ok(boiMortgageService.getBankDataList());
    }

    @GetMapping("/bank-data")
    public ResponseEntity<?> getBankDataByBankCode(@RequestParam int bankCode) {
        boiMortgageService.refresh();
        return ResponseEntity.ok(boiMortgageService.getBankDataByBankCode(bankCode));
    }

    @GetMapping("/mortgage")
    public ResponseEntity<?> getByMortgage(@RequestParam String mortgage) {
        boiMortgageService.refresh();
        return ResponseEntity.ok(boiMortgageService.getByMortgage(mortgage));
    }
}
