package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.DataGovService;
import com.example.mortgageil.Service.ExternalApiService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/v1/data")
public class DataController {

    @Resource(name = "externalApiService")
    private ExternalApiService externalApiService;

    @Resource(name = "dataGovService")
    private DataGovService dataGovService;

    @Value("${api.external.data-gov.average-index-linked}")
    private String averageIndexLinkedResource;


    @GetMapping("/average-index-linked")
    public ResponseEntity<?> getAverageInterestIndexLinked() {
        var url = dataGovService.setResourceId(averageIndexLinkedResource)
                .get();

        return ResponseEntity.ok(externalApiService.get(url)
                .in("result")
                .in("records")
                .get());
    }
}
