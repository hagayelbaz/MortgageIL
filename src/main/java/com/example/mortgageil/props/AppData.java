package com.example.mortgageil.props;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.Objects;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "app-data")
public class AppData {
    private String mode;

    public String getUrl(){
        if(Objects.equals(mode, "LOCAL"))
            return "http://localhost:3000";
        if(Objects.equals(mode, "RUN"))
            return "http://localhost:8080";
        if(Objects.equals(mode, "PROD"))
            return "https://www.mortgageil.com";
        throw new RuntimeException("Mode not supported");
    }

    public String getForward(){
        if(Objects.equals(mode, "LOCAL"))
            return "redirect:http://localhost:3000";
        else
            return "forward:/index.html";
    }

    public String processSuccessUrl(String url){
        if(Objects.equals(mode, "LOCAL"))
            return getUrl() + url;
        else
            return url;
    }
}
