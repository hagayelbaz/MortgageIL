package com.example.mortgageil.Config;

import com.example.mortgageil.Models.Mapper.*;
import org.mapstruct.factory.Mappers;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class MapperConfig {

    @Bean
    public PersonMapper personMapper() {
        return Mappers.getMapper(PersonMapper.class);
    }

    @Bean
    public UserLiabilityMapper userLiabilityMapper() {
        return Mappers.getMapper(UserLiabilityMapper.class);
    }

    @Bean
    public BorrowerMapper borrowerMapper() {
        return Mappers.getMapper(BorrowerMapper.class);
    }

    @Bean
    public UserMapper userMapper() {
        return Mappers.getMapper(UserMapper.class);
    }

    @Bean
    public MortgageGroupMapper mortgageGroupMapper() {
        return Mappers.getMapper(MortgageGroupMapper.class);
    }

    @Bean
    public MortgagePlanMapper mortgagePlanMapper() {
        return Mappers.getMapper(MortgagePlanMapper.class);
    }

    @Bean
    public SalaryMapper salaryMapper() {
        return Mappers.getMapper(SalaryMapper.class);
    }

    @Bean
    public LoanDataMapper loanDataMapper() {
        return Mappers.getMapper(LoanDataMapper.class);
    }
}
