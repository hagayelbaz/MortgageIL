package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Models.Request.BorrowerRequest;

public class BorrowerLiabilitiesRequestToEntityConverter
        implements RequestToEntityConverter<BorrowerLiabilitiesRequest, BorrowerLiabilities> {

    @Override
    public BorrowerLiabilities convert(BorrowerLiabilitiesRequest request) {
        return BorrowerLiabilities.builder()
                .amount(request.getAmount())
                .endDate(request.getEndDate())
                .build();

        //TODO: add person
    }
}
