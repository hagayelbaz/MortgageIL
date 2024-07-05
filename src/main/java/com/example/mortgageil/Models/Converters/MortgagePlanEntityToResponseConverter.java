package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Response.MortgagePlanResponse;
import org.springframework.stereotype.Component;

@Component
public class MortgagePlanEntityToResponseConverter
        implements EntityToResponseConverter<MortgagePlan, MortgagePlanResponse> {

    @Override
    public MortgagePlanResponse convert(MortgagePlan entity) {
        return MortgagePlanResponse.builder()
                .id(entity.getId())
                .type(entity.getType())
                .amount(entity.getAmount())
                .interestRate(entity.getInterestRate())
                .duration(entity.getDuration())
                .balloonDuration(entity.getBalloonDuration())
                .person(entity.getPerson())
                .build();
    }
}
