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

    @Resource(name = "externalApiService")
    private ExternalApiService externalApiService;

    @Resource(name = "urlBuilderService")
    private UrlBuilderService urlBuilderService;

    @Value("${api.external.boi.url.base-url}")
    private String boiBaseUrl;

    @Value("${api.external.boi.url.boi-interest}")
    private String boiInterest;

    @Cacheable(value = "boiInterestHistory")
    public JsonNode getBoiInterestHistory() throws Exception {
        String url = urlBuilderService.setBaseUrl(boiBaseUrl)
                .addPathSegment(boiInterest).build();

        var json = DataFormatConverter.xmlToJson(externalApiService.get(url));

        return new FluentJson(json)
                .in("DataSet").in("Series").in("Obs")
                .get();
    }
}
