package com.example.mortgageil.Config;

import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.User.RoleName;
import com.example.mortgageil.props.SecurityProperties;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
import org.springframework.web.filter.HiddenHttpMethodFilter;

import static com.example.mortgageil.Classes.Utils.combineArrays;
import static org.springframework.security.config.Customizer.withDefaults;

@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig {

    @Resource(name = "userRepository")
    private UserRepository userRepository;

    @Resource(name = "securityProperties")
    private SecurityProperties securityProperties;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        String [] guest = securityProperties.getSecurity().getPaths().getGuest();
        String [] all = securityProperties.getSecurity().getPaths().getAll();
        String [] shared = securityProperties.getSecurity().getPaths().getShared();
        String [] user = securityProperties.getSecurity().getPaths().getUser();
        String [] admin = securityProperties.getSecurity().getPaths().getAdmin();
        String loginPageUrl = securityProperties.getAuth().getLogin().getPageUrl();
        String loginSuccessUrl = securityProperties.getAuth().getLogin().getSuccessUrl();
        String loginFailureUrl = securityProperties.getAuth().getLogin().getFailureUrl();
        String logoutPageUrl = securityProperties.getAuth().getLogout().getPageUrl();
        String logoutSuccessUrl = securityProperties.getAuth().getLogout().getSuccessUrl();


        http
                .cors(withDefaults())
                .csrf(withDefaults())
                .authorizeHttpRequests((request) -> request
                        .requestMatchers(combineArrays(all, guest))
                        .permitAll()
                        .requestMatchers(shared)
                        .hasAnyRole(RoleName.USER.name(), RoleName.ADMIN.name())
                        .requestMatchers(user)
                        .hasRole(RoleName.USER.name())
                        .requestMatchers(admin)
                        .hasRole(RoleName.ADMIN.name())
                        .anyRequest()
                        .authenticated()
                )
                .formLogin((form) -> form
                        .loginPage(loginPageUrl)
                        .usernameParameter("email")
                        .passwordParameter("password")
                        .defaultSuccessUrl(loginSuccessUrl, true)
                        .failureUrl(loginFailureUrl)
                        .permitAll()
                )
                .exceptionHandling(e -> e
                        .accessDeniedPage("/?error=something-went-wrong"))
                .logout((logout) -> logout
                        .logoutUrl(logoutPageUrl)
                        .logoutSuccessUrl(logoutSuccessUrl)
                        .deleteCookies("JSESSIONID")
                        .permitAll()
                );

        return http.build();
    }

    @Bean
    public AuthenticationSuccessHandler oauth2AuthenticationSuccessHandler() {
        SimpleUrlAuthenticationSuccessHandler handler = new SimpleUrlAuthenticationSuccessHandler();
        handler.setDefaultTargetUrl("/create-delivery");
        return handler;
    }

    @Bean
    public AuthenticationFailureHandler oauth2AuthenticationFailureHandler() {
        SimpleUrlAuthenticationFailureHandler handler = new SimpleUrlAuthenticationFailureHandler();
        handler.setDefaultFailureUrl("/?error=sorry but you are not registered");
        return handler;
    }


    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }


    @Bean
    public UserDetailsService userDetailsService() {
        return (email) ->
                userRepository.findByEmail(email)
                        .orElseThrow(() -> new UsernameNotFoundException("User: \"" + email + "\" not found"));
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
    }

    @Bean
    public AuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();
        authenticationProvider.setUserDetailsService(userDetailsService());
        authenticationProvider.setPasswordEncoder(passwordEncoder());
        return authenticationProvider;
    }

    @Bean
    public WebSecurityCustomizer webSecurityCustomizer() {
        return (web) -> web.ignoring().requestMatchers("/favicon.ico", "/robots.txt", "/sitemap.xml");
    }

    @Bean
    public HiddenHttpMethodFilter hiddenHttpMethodFilter() {
        return new HiddenHttpMethodFilter();
    }
}
