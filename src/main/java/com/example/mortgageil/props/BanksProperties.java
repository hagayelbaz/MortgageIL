package com.example.mortgageil.props;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import java.util.List;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "mortgageil.data")
public class BanksProperties {
    private List<Bank> banks;
    private List<Mortgage> mortgages;

    @Getter
    @Setter
    public static class Bank {
        private String name;
        private int code;
        private String color;
        private int fullCode;
        private String logoUrl;
        private String preApprovedUrl;
    }

    @Getter
    @Setter
    public static class Mortgage {
        private String name;
        private int code;
        private String section;
    }
}
