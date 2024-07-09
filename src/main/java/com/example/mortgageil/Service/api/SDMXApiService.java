package com.example.mortgageil.Service.api;

import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.props.ApiProperties;
import com.example.mortgageil.props.ApiProperties.Endpoint;
import com.example.mortgageil.props.ApiProperties.Endpoint.SubEndpoint;
import com.example.mortgageil.props.ApiProperties.FilterKey;
import jakarta.annotation.Resource;
import org.springframework.context.annotation.Scope;
import org.springframework.context.annotation.ScopedProxyMode;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.context.WebApplicationContext;

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.logging.Logger;


@Service
@Scope(value = WebApplicationContext.SCOPE_REQUEST, proxyMode = ScopedProxyMode.TARGET_CLASS)
public class SDMXApiService {

    private static final Logger LOGGER = Logger.getLogger(SDMXApiService.class.getName());

    // <editor-fold desc="Fields">
    @Resource(name = "apiProperties")
    private ApiProperties apiProperties;

    @Resource(name = "restTemplate")
    private RestTemplate restTemplate;

    @Resource(name = "urlBuilderService")
    private UrlBuilderService urlBuilderService;

    private String endpoint;

    private String subEndpoint;

    private final Map<FilterKey, String> filters = new HashMap<>();
    // </editor-fold>

    // <editor-fold desc="Setters">
    public SDMXApiService setEndpoint(String endpoint) {
        this.endpoint = endpoint;
        return this;
    }

    public SDMXApiService setSubEndpoint(String subEndpoint) {
        this.subEndpoint = subEndpoint;
        return this;
    }

    public SDMXApiService addFilter(FilterKey key, String value) {
        filters.put(key, value);
        return this;
    }
    // </editor-fold>

    // <editor-fold desc="Methods">
    public String fetch() {
        Endpoint endpoint = apiProperties.getEndpoints().get(this.endpoint);
        SubEndpoint subEndpoint = endpoint.getSubEndpoints().get(this.subEndpoint);

        var url = urlBuilderService.setBaseUrl(apiProperties.getBaseUrl())
                .addPathSegment(apiProperties.getAgency())
                .addPathSegment(endpoint.getAgency())
                .addPathSegment(subEndpoint.getEndpoint());

        for (Entry<FilterKey, String> entry : filters.entrySet()) {
            url = url.addParam(apiProperties.getFilters().get(entry.getKey().name()), entry.getValue());
        }

        return restTemplate.getForObject(url.build(), String.class);
    }
    // </editor-fold>

}