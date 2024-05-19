package com.example.mortgageil.Service;


import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UrlBuilderService {

    private String baseUrl;
    private Map<String, String> params = new HashMap<>();
    private List<String> pathSegments = new ArrayList<>();

    public UrlBuilderService setBaseUrl(String baseUrl) {
        this.baseUrl = baseUrl;
        return this;
    }


    public UrlBuilderService addParam(String key, String value) {
        params.put(key, value);
        return this;
    }

    public UrlBuilderService addPathSegment(String segment) {
        pathSegments.add(segment);
        return this;
    }

    public String build() {
        StringBuilder urlBuilder = new StringBuilder(baseUrl);
        pathSegments.forEach(segment -> {
            urlBuilder.append("/");
            urlBuilder.append(segment);
        });

        if (!params.isEmpty()) {
            urlBuilder.append("?");
            params.forEach((key, value) -> urlBuilder.append(key)
                    .append("=")
                    .append(value)
                    .append("&"));

            urlBuilder.setLength(urlBuilder.length() - 1);
        }
        return urlBuilder.toString();
    }
}
