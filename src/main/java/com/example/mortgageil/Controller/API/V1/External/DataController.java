package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.api.BoiService;
import com.example.mortgageil.Service.api.ExternalApiService;
import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.utils.DataFormatConverter;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/data")
public class DataController {

    @Resource(name = "boiService")
    private BoiService boiService;

    @GetMapping("/average-index-linked")
    public ResponseEntity<?> getAverageInterestIndexLinked() throws Exception {
        return ResponseEntity.ok(boiService.getBoiInterestHistory());
    }

    @GetMapping("/cpi")
    public ResponseEntity<?> getCpi() throws Exception {
        return ResponseEntity.ok(boiService.getCpi());
    }

    @GetMapping("/current-cpi")
    public ResponseEntity<?> getCurrentCpi() throws Exception {
        return ResponseEntity.ok(boiService.getBoiCurrentCpi());
    }

    @GetMapping("/current-boi-interest")
    public ResponseEntity<?> getCurrentInterest() throws Exception {
        return ResponseEntity.ok(boiService.getBoiCurrentInterest());
    }

    @GetMapping("/cpi-last-year-change")
    public ResponseEntity<?> getCpiLastYearChange() throws Exception {
        return ResponseEntity.ok(boiService.getCpiChangeInLast12Months());
    }
}
