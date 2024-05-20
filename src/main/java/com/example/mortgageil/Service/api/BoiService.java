package com.example.mortgageil.Service.api;

import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.utils.DataFormatConverter;
import com.example.mortgageil.utils.FluentJson;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;


@Service
public class BoiService {

    //<editor-fold desc="Fields">
    @Resource(name = "externalApiService")
    private ExternalApiService externalApiService;

    @Resource(name = "urlBuilderService")
    private UrlBuilderService urlBuilderService;

    @Value("${api.external.boi.url.base-url}")
    private String boiBaseUrl;

    @Value("${api.external.boi.url.boi-interest}")
    private String boiInterest;

    @Value("${api.external.boi.url.cpi}")
    private String cpi;

    @Value("${api.external.boi.url.boi-current-interest}")
    private String boiCurrentInterest;
    //</editor-fold>

    //<editor-fold desc="Getters">
    @Cacheable(value = "boiInterestHistory")
    public JsonNode getBoiInterestHistory() throws Exception {
        String url = urlBuilderService
                .setBaseUrl(boiBaseUrl)
                .addPathSegment(boiInterest)
                .build();

        return get(url);
    }

    @Cacheable(value = "cpi")
    public JsonNode getCpi() throws Exception {
        String url = urlBuilderService
                .setBaseUrl(boiBaseUrl)
                .addPathSegment(cpi)
                .build();

        return get(url);
    }

    public JsonNode getBoiCurrentInterest() throws Exception {
        String url = urlBuilderService
                .setBaseUrl(boiCurrentInterest)
                .build();

        return new FluentJson(externalApiService.get(url)).get();
    }
    //</editor-fold>

    //<editor-fold desc="Private Methods">
    private JsonNode get(String url) throws Exception {
        var json = DataFormatConverter.xmlToJson(externalApiService.get(url));

        return new FluentJson(json)
                .in("DataSet")
                .in("Series")
                .in("Obs")
                .get();
    }
    //</editor-fold>
}
