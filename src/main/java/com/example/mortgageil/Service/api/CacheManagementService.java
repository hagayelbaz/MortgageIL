package com.example.mortgageil.Service.api;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class CacheManagementService {

    private final static Logger LOGGER = Logger.getLogger(CacheManagementService.class.getName());


    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "interest-rate.base-rate", allEntries = true)
    public void clearInterestRateCache() {
        LOGGER.info("Interest rate cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "interest-rate.base-rate.last-12-months", allEntries = true)
    public void clearLast12MonthsInterestRateCache() {
        LOGGER.info("Last 12 months interest rate cache cleared");
    }


    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "cpi.percentage-change", allEntries = true)
    public void clearCpiPercentageChangeCache() {
        LOGGER.info("CPI percentage change cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "cpi.historic-points", allEntries = true)
    public void clearCpiHistoricPointsCache() {
        LOGGER.info("CPI historic points cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.next-year", allEntries = true)
    public void clearInflationExpectationsNextYearCache() {
        LOGGER.info("Inflation expectations next year cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.next-next-year", allEntries = true)
    public void clearInflationExpectationsNextNextYearCache() {
        LOGGER.info("Inflation expectations next next year cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.five-years", allEntries = true)
    public void clearInflationExpectationsFiveYearsCache() {
        LOGGER.info("Inflation expectations five years cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.average-twelve-months", allEntries = true)
    public void clearInflationExpectationsAverageTwelveMonthsCache() {
        LOGGER.info("Inflation expectations average twelve months cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.third-year", allEntries = true)
    public void clearInflationExpectationsThirdYearCache() {
        LOGGER.info("Inflation expectations third year cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.five-to-three-years", allEntries = true)
    public void clearInflationExpectationsFiveToThreeYearsCache() {
        LOGGER.info("Inflation expectations five to three years cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.ten-to-five-years", allEntries = true)
    public void clearInflationExpectationsTenToFiveYearsCache() {
        LOGGER.info("Inflation expectations ten to five years cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.next-year.latest", allEntries = true)
    public void clearInflationExpectationsNextYearLatestCache() {
        LOGGER.info("Inflation expectations next year latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.next-next-year.latest", allEntries = true)
    public void clearInflationExpectationsNextNextYearLatestCache() {
        LOGGER.info("Inflation expectations next next year latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.five-years.latest", allEntries = true)
    public void clearInflationExpectationsFiveYearsLatestCache() {
        LOGGER.info("Inflation expectations five years latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.average-twelve-months.latest", allEntries = true)
    public void clearInflationExpectationsAverageTwelveMonthsLatestCache() {
        LOGGER.info("Inflation expectations average twelve months latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.third-year.latest", allEntries = true)
    public void clearInflationExpectationsThirdYearLatestCache() {
        LOGGER.info("Inflation expectations third year latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.five-to-three-years.latest", allEntries = true)
    public void clearInflationExpectationsFiveToThreeYearsLatestCache() {
        LOGGER.info("Inflation expectations five to three years latest cache cleared");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "inflation-expectations.ten-to-five-years.latest", allEntries = true)
    public void clearInflationExpectationsTenToFiveYearsLatestCache() {
        LOGGER.info("Inflation expectations ten to five years latest cache cleared");
    }

}