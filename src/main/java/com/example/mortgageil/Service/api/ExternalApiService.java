package com.example.mortgageil.Service.api;

import com.example.mortgageil.utils.FluentJson;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ExternalApiService {

    @Resource(name = "restTemplate")
    private RestTemplate restTemplate;

    public String get(String url) {
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return response.getBody();
        }
        return "";
    }

    public FluentJson getJson(String url) {
        ResponseEntity<String> response = restTemplate.getForEntity(url, String.class);
        if (response.getStatusCode().is2xxSuccessful() && response.getBody() != null) {
            return new FluentJson(response.getBody());
        }
        return new FluentJson("{}");
    }
}