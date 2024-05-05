package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Converters.MortgagePlanEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.MortgagePlanRequestToEntityConverter;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Request.MortgagePlanRequest;
import com.example.mortgageil.Models.Response.MortgagePlanResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class MortgagePlanService
        extends DBService<
        MortgagePlan,
        MortgagePlanRequest,
        MortgagePlanResponse>{


    public MortgagePlanService(JpaRepository<MortgagePlan, Long> repository) {
        super(repository,
                new MortgagePlanRequestToEntityConverter(),
                new MortgagePlanEntityToResponseConverter());
    }
}
