package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Response.BorrowerLiabilitiesResponse;
import com.example.mortgageil.Models.Response.BorrowerResponse;

public class BorrowerLiabilitiesEntityToResponseConverter implements
        EntityToResponseConverter<BorrowerLiabilities, BorrowerLiabilitiesResponse> {

    @Override
    public BorrowerLiabilitiesResponse convert(BorrowerLiabilities entity) {
        return BorrowerLiabilitiesResponse.builder()
                .id(entity.getId())
                .amount(entity.getAmount())
                .endDate(entity.getEndDate())
                .person(entity.getPerson())
                .build();
    }
}
