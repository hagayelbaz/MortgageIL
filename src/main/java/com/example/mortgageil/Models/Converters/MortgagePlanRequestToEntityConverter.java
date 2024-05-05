package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Request.BorrowerRequest;
import com.example.mortgageil.Models.Request.MortgagePlanRequest;

public class MortgagePlanRequestToEntityConverter
        implements RequestToEntityConverter<MortgagePlanRequest, MortgagePlan> {

    @Override
    public MortgagePlan convert(MortgagePlanRequest request) {
        return MortgagePlan.builder()
                .type(request.getType())
                .amount(request.getAmount())
                .interestRate(request.getInterestRate())
                .duration(request.getDuration())
                .balloonDuration(request.getBalloonDuration())
                .build();

        //TODO: Add person to MortgagePlan
    }
}
