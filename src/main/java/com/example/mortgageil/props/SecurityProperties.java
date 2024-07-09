package com.example.mortgageil.props;


import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Getter
@Setter
@Component
@ConfigurationProperties(prefix = "mortgageil")
public class SecurityProperties {
    private Security security;
    private Auth auth;

    @Getter
    @Setter
    public static class Security{
        private Paths paths;

        @Getter
        @Setter
        public static class Paths{
            private String [] guest;
            private String [] all;
            private String [] shared;
            private String [] user;
            private String [] admin;
        }
    }

    @Getter
    @Setter
    public static class Auth{
        private Login login;
        private Logout logout;

        @Getter
        @Setter
        public static class Login{
            private String pageUrl;
            private String successUrl;
            private String failureUrl;
        }

        @Getter
        @Setter
        public static class Logout{
            private String pageUrl;
            private String successUrl;
        }
    }
}
