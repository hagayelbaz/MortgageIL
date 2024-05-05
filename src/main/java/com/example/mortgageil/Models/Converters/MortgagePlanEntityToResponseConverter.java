package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Response.BorrowerResponse;
import com.example.mortgageil.Models.Response.MortgagePlanResponse;

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
