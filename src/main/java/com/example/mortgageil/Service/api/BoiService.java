package com.example.mortgageil.Service.api;

import com.example.mortgageil.props.ApiProperties;
import com.example.mortgageil.props.ApiProperties.FilterKey;
import com.example.mortgageil.utils.DataFormatConverter;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;


@Service
public class BoiService {

    private static final Logger LOGGER = Logger.getLogger(BoiService.class.getName());
    //<editor-fold desc="Fields">
    @Resource(name = "SDMXApiService")
    private SDMXApiService SDMXApiService;
    //</editor-fold>

    //<editor-fold desc="Getters">
    @Cacheable(value = "boiInterest")
    public JsonNode getBoiInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "currentInterest")
    public JsonNode getCurrentInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .addFilter(FilterKey.LATEST, "1")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "last12MonthsInterest")
    public JsonNode getLast12MonthsInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .addFilter(FilterKey.LATEST, "12")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "cpi")
    public JsonNode getCPI() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("percentage-change")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }
    //</editor-fold>

}
