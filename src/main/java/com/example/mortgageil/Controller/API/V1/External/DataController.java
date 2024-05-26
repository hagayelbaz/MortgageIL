package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.api.BoiService;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/data", produces = "application/json")
public class DataController {

    @Resource(name = "boiService")
    private BoiService boiService;


    @GetMapping("/boi-interest")
    public ResponseEntity<JsonNode> getBoiInterest() throws Exception {
        return ResponseEntity.ok(boiService.getBoiInterest());
    }

    @GetMapping("/boi-current-interest")
    public ResponseEntity<JsonNode> getCurrentInterest() throws Exception {
        return ResponseEntity.ok(boiService.getCurrentInterest());
    }

    @GetMapping("/boi-last-12-months-interest")
    public ResponseEntity<JsonNode> getLast12MonthsInterest() throws Exception {
        return ResponseEntity.ok(boiService.getLast12MonthsInterest());
    }

    @GetMapping("/cpi")
    public ResponseEntity<Object> getCPI() throws Exception {
        return ResponseEntity.ok(boiService.getCPI());
    }
}
