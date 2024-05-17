package com.example.mortgageil.Controller.API.V1.External;


import com.example.mortgageil.Service.ExternalApiService;
import jakarta.annotation.Resource;
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

    String str = "https://data.gov.il/api/3/action/datastore_search?resource_id=96ba107d-cc15-41cf-b223-5bb592e14666";

    @GetMapping("/get")
    public ResponseEntity<?> get() {
        return ResponseEntity.ok(externalApiService.get(str)
                .in("result")
                .in("records")
                .get());
    }
}
