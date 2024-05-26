package com.example.mortgageil.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Map;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "api.external.boi")
public class ApiProperties {
    private String baseUrl;
    private Map<String, String> format;
    private String agency;
    private Map<String, Endpoint> endpoints;
    private Map<String, String> filters;

    public enum FilterKey {
        LATEST, START_DATE, END_DATE
    }

    @Getter
    @Setter
    public static class Endpoint {
        private String agency;
        private Map<String, SubEndpoint> subEndpoints;

        @Getter
        @Setter
        public static class SubEndpoint {
            private String description;
            private String endpoint;
        }
    }
}
