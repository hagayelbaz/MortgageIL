package com.example.mortgageil.props;


import jakarta.annotation.Resource;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "api.external.boi-mortgage")
public class BoiMortgage {
    private String baseUrl;
    private String agency;
    private String baseCode;
    private String finalCode;

    //SUGGEST: is that should be here??
    @Resource(name = "banksProperties")
    private BanksProperties banksProperties;

    public String getUrl() {

        return new StringBuilder()
                .append(baseUrl)
                .append("/")
                .append(agency)
                .append("/1.0/")
                .toString();
    }

}
