package com.example.mortgageil.Service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class DataGovService {

    @Value("${api.external.data-gov.base-url}")
    private String baseUrl;

    private String resourceId;

    private String query;

    private String limit;


    public DataGovService setResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }

    public DataGovService setQuery(String query) {
        this.query = query;
        return this;
    }

    public DataGovService setLimit(String limit) {
        this.limit = limit;
        return this;
    }

    public String get() {
        String r = resourceId == null ? "" : "?resource_id=" + resourceId;
        String q = query == null ? "" : "&q=" + query;
        String l = limit == null ? "" : "&limit=" + limit;

        return baseUrl + r + q + l;
    }

}
