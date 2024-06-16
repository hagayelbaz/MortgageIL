package com.example.mortgageil.Controller.API.V1;


import com.example.mortgageil.Service.api.BoiMortgageService;
import com.example.mortgageil.props.BanksProperties;
import com.example.mortgageil.props.BoiMortgage;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "", produces = "application/json")
public class test {

    @Resource(name = "banksProperties")
    private BanksProperties banksProperties;

    @Resource(name = "boiMortgage")
    private BoiMortgage boiMortgage;

    @Resource(name = "boiMortgageService")
    private BoiMortgageService boiMortgageService;

    @GetMapping("/test")
    public ResponseEntity<?> test() {
        return ResponseEntity.ok(banksProperties);
    }

    @GetMapping("/test2")
    public ResponseEntity<?> test2() {
        return ResponseEntity.ok(boiMortgage.getUrl());
    }

    @GetMapping("/test3")
    public ResponseEntity<?> test3() throws Exception {
        boiMortgageService.refresh();
        return ResponseEntity.ok(boiMortgageService.getTheBestBank());
    }
}
