package com.example.mortgageil.Config;


import com.example.mortgageil.Models.Converters.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class ConverterConfiguration {

    @Bean
    public BorrowerEntityToResponseConverter borrowerEntityToResponseConverter() {
        return new BorrowerEntityToResponseConverter();
    }

    @Bean
    public BorrowerLiabilitiesEntityToResponseConverter borrowerLiabilitiesEntityToResponseConverter() {
        return new BorrowerLiabilitiesEntityToResponseConverter();
    }

    @Bean
    public BorrowerLiabilitiesRequestToEntityConverter borrowerLiabilitiesRequestToEntityConverter() {
        return new BorrowerLiabilitiesRequestToEntityConverter();
    }

    @Bean
    public BorrowerRequestToEntityConverter borrowerRequestToEntityConverter(
            BorrowerLiabilitiesRequestToEntityConverter borrowerLiabilitiesConverter,
            MortgagePlanRequestToEntityConverter mortgagePlanConverter,
            SalaryRequestToEntityConverter salaryConverter) {
        return new BorrowerRequestToEntityConverter(
                borrowerLiabilitiesConverter,
                mortgagePlanConverter,
                salaryConverter);
    }
    @Bean
    public MortgagePlanEntityToResponseConverter mortgagePlanEntityToResponseConverter() {
        return new MortgagePlanEntityToResponseConverter();
    }

    @Bean
    public MortgagePlanRequestToEntityConverter mortgagePlanRequestToEntityConverter() {
        return new MortgagePlanRequestToEntityConverter();
    }

    @Bean
    public SalaryEntityToResponseConverter salaryEntityToResponseConverter() {
        return new SalaryEntityToResponseConverter();
    }

    @Bean
    public SalaryRequestToEntityConverter salaryRequestToEntityConverter() {
        return new SalaryRequestToEntityConverter();
    }

    @Bean
    public UserEntityToResponseConverter userEntityToResponseConverter() {
        return new UserEntityToResponseConverter();
    }

    @Bean
    public UserRequestToEntityConverter userRequestToEntityConverter() {
        return new UserRequestToEntityConverter();
    }
}
