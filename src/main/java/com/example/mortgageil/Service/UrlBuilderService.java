package com.example.mortgageil.Service;


import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UrlBuilderService {

    private String baseUrl;
    private Map<String, String> params;
    private List<String> pathSegments;

    public UrlBuilderService() {
        this.baseUrl = null;
        this.params = new HashMap<>();
        this.pathSegments = new ArrayList<>();
    }

    private UrlBuilderService(String baseUrl, Map<String, String> params, List<String> pathSegments) {
        this.baseUrl = baseUrl;
        this.params = new HashMap<>(params);
        this.pathSegments = new ArrayList<>(pathSegments);
    }

    public UrlBuilderService setBaseUrl(String baseUrl) {
        return new UrlBuilderService(baseUrl, this.params, this.pathSegments);
    }

    public UrlBuilderService addPathSegment(String segment) {
        List<String> newPathSegments = new ArrayList<>(this.pathSegments);
        newPathSegments.add(segment);
        return new UrlBuilderService(this.baseUrl, this.params, newPathSegments);
    }

    public UrlBuilderService addParam(String key, String value) {
        Map<String, String> newParams = new HashMap<>(this.params);
        newParams.put(key, value);
        return new UrlBuilderService(this.baseUrl, newParams, this.pathSegments);
    }

    public String build() {
        StringBuilder urlBuilder = new StringBuilder(baseUrl);
        pathSegments.forEach(segment -> {
            urlBuilder.append("/");
            urlBuilder.append(segment);
        });

        if (!params.isEmpty()) {
            urlBuilder.append("?");
            params.forEach((key, value) -> {
                urlBuilder.append(key).append("=").append(value).append("&");
            });
            urlBuilder.setLength(urlBuilder.length() - 1);
        }
        return urlBuilder.toString();
    }
}

