package com.example.mortgageil.Service;


import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class UrlBuilderService {

    private String baseUrl;
    private Map<String, String> params;
    private List<String> pathSegments;
    private List<String> resources;

    public UrlBuilderService() {
        this.baseUrl = null;
        this.params = new HashMap<>();
        this.pathSegments = new ArrayList<>();
        this.resources = new ArrayList<>();
    }

    private UrlBuilderService(String baseUrl, Map<String, String> params, List<String> pathSegments, List<String> resources) {
        this.baseUrl = baseUrl;
        this.params = new HashMap<>(params);
        this.pathSegments = new ArrayList<>(pathSegments);
        this.resources = new ArrayList<>(resources);
    }

    public UrlBuilderService setBaseUrl(String baseUrl) {
        return new UrlBuilderService(baseUrl, this.params, this.pathSegments, this.resources);
    }

    public UrlBuilderService addPathSegment(String segment) {
        List<String> newPathSegments = new ArrayList<>(this.pathSegments);
        newPathSegments.add(segment);
        return new UrlBuilderService(this.baseUrl, this.params, newPathSegments, this.resources);
    }

    public UrlBuilderService addParam(String key, String value) {
        Map<String, String> newParams = new HashMap<>(this.params);
        newParams.put(key, value);
        return new UrlBuilderService(this.baseUrl, newParams, this.pathSegments, this.resources);
    }

    public UrlBuilderService addResource(String resource) {
        List<String> newResources = new ArrayList<>(this.resources);
        newResources.add(resource);
        return new UrlBuilderService(this.baseUrl, this.params, this.pathSegments, newResources);
    }

    public String build() {
        StringBuilder urlBuilder = new StringBuilder(baseUrl);
        pathSegments.forEach(segment -> {
            urlBuilder.append("/");
            urlBuilder.append(segment);
        });

        resources.forEach(resource -> {
            if (resources.indexOf(resource) != 0) {
                urlBuilder.append(",");
            }
            urlBuilder.append(resource);
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

