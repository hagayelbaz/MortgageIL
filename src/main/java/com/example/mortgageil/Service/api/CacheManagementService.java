package com.example.mortgageil.Service.api;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class CacheManagementService {

    private final static Logger LOGGER = Logger.getLogger(CacheManagementService.class.getName());

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "boiInterest", allEntries = true)
    public void refreshBoiInterestCache() {
        LOGGER.info("Boi interest cache has been refreshed");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "last12MonthsInterest", allEntries = true)
    public void refreshLast12MonthsInterestCache() {
        LOGGER.info("Last 12 months interest cache has been refreshed");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "currentInterest", allEntries = true)
    public void refreshCurrentInterestCache() {
        LOGGER.info("Current interest cache has been refreshed");
    }

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "cpi", allEntries = true)
    public void refreshCPICache() {
        LOGGER.info("CPI cache has been refreshed");
    }
}