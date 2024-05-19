package com.example.mortgageil.Service.api;

import org.springframework.cache.annotation.CacheEvict;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.util.logging.Logger;

@Service
public class CacheManagementService {

    private final static Logger LOGGER = Logger.getLogger(CacheManagementService.class.getName());

    @Scheduled(cron = "0 0 3 * * ?")
    @CacheEvict(value = "boiInterestHistory", allEntries = true)
    public void refreshBoiInterestCache() {
        LOGGER.info("Boi interest cache has been refreshed");
    }
}