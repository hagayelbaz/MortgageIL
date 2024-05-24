package com.example.mortgageil.Service.api;

import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.utils.DataFormatConverter;
import com.example.mortgageil.utils.FluentJson;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;


@Service
public class BoiService {

    private static final Logger LOGGER = Logger.getLogger(BoiService.class.getName());
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

    @Value("${api.external.boi.url.cpi-percentage}")
    private String cpiPercentage;

    @Value("${api.external.boi.params.lastOne}")
    private String lastOne;

    @Value("${api.external.boi.url.cpi-change-in-last-12-months}")
    private String cpiChangeInLast12Months;
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

        LOGGER.info("CurrentInterestURl " + url);

        return new FluentJson(externalApiService.get(url)).get();
    }

    public JsonNode getBoiCurrentCpi() throws Exception {
        String url = urlBuilderService
                .setBaseUrl(boiBaseUrl)
                .addPathSegment(cpiPercentage)
                .addParam(lastOne, "1")
                .build();

        return get(url);
    }

    public JsonNode getCpiChangeInLast12Months() throws Exception {
        String url = urlBuilderService
                .setBaseUrl(boiBaseUrl)
                .addPathSegment(cpiChangeInLast12Months)
                .addParam(lastOne, "1")
                .build();

        return get(url);
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
