package com.example.mortgageil.Service.api;

import com.example.mortgageil.props.ApiProperties.FilterKey;
import com.example.mortgageil.utils.DataFormatConverter;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Service;

import java.util.Map;
import java.util.function.Function;
import java.util.logging.Logger;


@Service
public class BoiService {

    //<editor-fold desc="Fields">
    @Autowired
    private ApplicationContext context;

    private BoiService getSelf() {
        return context.getBean(BoiService.class);
    }

    @Resource(name = "SDMXApiService")
    private SDMXApiService SDMXApiService;
    //</editor-fold>

    //<editor-fold desc="Getters">

    //<editor-fold desc="Boi Interest">
    @Cacheable(value = "interest-rate.base-rate")
    public JsonNode getBoiInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    public JsonNode getCurrentInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .addFilter(FilterKey.LATEST, "1")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "interest-rate.base-rate.last-12-months")
    public JsonNode getLast12MonthsInterest() throws Exception {
        String data = SDMXApiService
                .setEndpoint("interest-rate")
                .setSubEndpoint("base-rate")
                .addFilter(FilterKey.LATEST, "12")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }
    //</editor-fold>

    //<editor-fold desc="CPI">
    @Cacheable(value = "cpi.percentage-change")
    public JsonNode getCPI() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("percentage-change")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "cpi.historic-points")
    public JsonNode getCPIPoints() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("historic-points")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    public JsonNode getCpiLastYearChange() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("last-12-months")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    public JsonNode getCpiLastMonthChange() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("percentage-change")
                .addFilter(FilterKey.LATEST, "1")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    public JsonNode getLastYearChangeForThisMonth() throws Exception {
        String data = SDMXApiService
                .setEndpoint("cpi")
                .setSubEndpoint("last-12-months")
                .addFilter(FilterKey.LATEST, "1")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }
    //</editor-fold>

    //<editor-fold desc="Inflation Expectations">
    @Cacheable(value = "inflation-expectations.next-year")
    public JsonNode getInflationExpectationsNextYear() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("next-year")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.next-next-year")
    public JsonNode getInflationExpectationsNextNextYear() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("next-next-year")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.five-years")
    public JsonNode getInflationExpectationsFiveYears() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("five-years")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.average-twelve-months")
    public JsonNode getInflationExpectationsAverageTwelveMonths() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("average-twelve-months")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.third-year")
    public JsonNode getInflationExpectationsThirdYear() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("third-year")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.five-to-three-years")
    public JsonNode getInflationExpectationsFiveToThreeYears() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("five-to-three-years")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    @Cacheable(value = "inflation-expectations.ten-to-five-years")
    public JsonNode getInflationExpectationsTenToFiveYears() throws Exception {
        String data = SDMXApiService
                .setEndpoint("inflation-expectations")
                .setSubEndpoint("ten-to-five-years")
                .fetch();
        return DataFormatConverter.sdmxToJson(data);
    }

    public JsonNode getInflationExpectationsByMonths(double months) throws Exception {
        BoiService self = getSelf();

        if (months < 12)
            return self.getInflationExpectationsNextYear();
        if (months < 24)
            return self.getInflationExpectationsNextNextYear();
        if (months < 36)
            return self.getInflationExpectationsThirdYear();
        if (months < 60)
            return self.getInflationExpectationsFiveToThreeYears();
        if (months == 60)
            return self.getInflationExpectationsFiveYears();
        if (months < 120)
            return self.getInflationExpectationsTenToFiveYears();

        throw new IllegalArgumentException("Invalid months value");
    }

    public JsonNode test(int month) throws Exception {
        Function<Integer, String> topicSelector = mnt -> {
            if (month < 12)
                return "next-year";
            if (month < 24)
                return "next-next-year";
            if (month < 36)
                return "third-year";
            if (month <= 60)
                return "five-to-three-years";
            if (month < 72)
                return "five-years";
            if (month < 120)
                return "ten-to-five-years";
            return "ten-to-five-years";
        };

        return getGeneralData("inflation-expectations",
                topicSelector.apply(month), Map.of(FilterKey.LATEST, "1"));
    }
    //</editor-fold>

    public JsonNode getGeneralData(String endpoint, String subEndpoint, Map<FilterKey, String> filters) throws Exception {
        var data = SDMXApiService
                .setEndpoint(endpoint)
                .setSubEndpoint(subEndpoint);

        filters.forEach(data::addFilter);
        return DataFormatConverter.sdmxToJson(data.fetch());
    }

    //</editor-fold>
}
