package com.example.mortgageil.Service;

import com.example.mortgageil.Core.Helpers.FluentJson;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;

@Service
public class ExternalApiService {

    @Resource(name = "restTemplate")
    private RestTemplate restTemplate;

    public FluentJson get(String url) {
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return new FluentJson(response.getBody());
        }
        return new FluentJson("{}");
    }

}