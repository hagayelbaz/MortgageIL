package com.example.mortgageil.Config;


import com.example.mortgageil.Core.Mortgage.AmortizationCalculationService;
import com.example.mortgageil.Core.Mortgage.AnnuityAmortizationScheduleService;
import com.example.mortgageil.Core.Mortgage.EqualPrincipalAmortizationScheduleService;
import com.example.mortgageil.Core.Mortgage.FutureData;
import org.springframework.beans.factory.config.ConfigurableBeanFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Scope;

@Configuration
public class VarConfig {

    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    public AnnuityAmortizationScheduleService annuityAmortizationScheduleService() {
        return new AnnuityAmortizationScheduleService();
    }

    @Bean
    @Scope(ConfigurableBeanFactory.SCOPE_PROTOTYPE)
    public EqualPrincipalAmortizationScheduleService equalPrincipalAmortizationScheduleService() {
        return new EqualPrincipalAmortizationScheduleService();
    }

    @Bean
    public FutureData futureData() {
        return new FutureData();
    }

}
