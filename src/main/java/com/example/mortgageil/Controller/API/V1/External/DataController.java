package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.api.BoiService;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/v1/data", produces = "application/json")
public class DataController {

    @Resource(name = "boiService")
    private BoiService boiService;


    // <editor-fold desc="Boi Interest">
    @GetMapping("/interest-rate/base-rate")
    public ResponseEntity<JsonNode> getBoiInterest() throws Exception {
        return ResponseEntity.ok(boiService.getBoiInterest());
    }

    @GetMapping("/interest-rate/current")
    public ResponseEntity<JsonNode> getCurrentInterest() throws Exception {
        return ResponseEntity.ok(boiService.getCurrentInterest());
    }

    @GetMapping("/interest-rate/base-rate/last-12-months")
    public ResponseEntity<JsonNode> getLast12MonthsInterest() throws Exception {
        return ResponseEntity.ok(boiService.getLast12MonthsInterest());
    }
    // </editor-fold>

    // <editor-fold desc="CPI">
    @GetMapping("/cpi/percentage-change")
    public ResponseEntity<Object> getCPI() throws Exception {
        return ResponseEntity.ok(boiService.getCPI());
    }

    @GetMapping("/cpi/historic-points")
    public ResponseEntity<Object> getCPIHistoricPoints() throws Exception {
        return ResponseEntity.ok(boiService.getCPIPoints());
    }

    @GetMapping("/cpi/last-year-change")
    public ResponseEntity<Object> getCpiLastYearChange() throws Exception {
        return ResponseEntity.ok(boiService.getCpiLastYearChange());
    }
    // </editor-fold>

    // <editor-fold desc="Inflation Expectations">

    @GetMapping("/inflation-expectations/next-year")
    public ResponseEntity<Object> getInflationExpectationsNextYear() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsNextYear());
    }

    @GetMapping("/inflation-expectations/next-next-year")
    public ResponseEntity<Object> getInflationExpectationsNextNextYear() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsNextNextYear());
    }

    @GetMapping("/inflation-expectations/five-years")
    public ResponseEntity<Object> getInflationExpectationsFiveYears() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsFiveYears());
    }

    @GetMapping("/inflation-expectations/average-twelve-months")
    public ResponseEntity<Object> getInflationExpectationsAverageTwelveMonths() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsAverageTwelveMonths());
    }

    @GetMapping("/inflation-expectations/third-year")
    public ResponseEntity<Object> getInflationExpectationsThirdYear() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsThirdYear());
    }

    @GetMapping("/inflation-expectations/five-to-three-years")
    public ResponseEntity<Object> getInflationExpectationsFiveToThreeYears() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsFiveToThreeYears());
    }

    @GetMapping("/inflation-expectations/ten-to-five-years")
    public ResponseEntity<Object> getInflationExpectationsTenToFiveYears() throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsTenToFiveYears());
    }

    @GetMapping("/inflation-expectations/months/{months}")
    public ResponseEntity<Object> getInflationExpectationsMonths(@PathVariable double months) throws Exception {
        return ResponseEntity.ok(boiService.getInflationExpectationsByMonths(months));
    }


    // </editor-fold>
}
