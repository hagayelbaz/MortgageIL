package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Response.BorrowerResponse;

public class BorrowerEntityToResponseConverter implements EntityToResponseConverter<Borrower, BorrowerResponse> {

    @Override
    public BorrowerResponse convert(Borrower entity) {
        return BorrowerResponse.builder()
                .id(entity.getId())
                .createdDate(entity.getCreatedDate())
                .lastModifiedDate(entity.getLastModifiedDate())
                .firstName(entity.getFirstName())
                .lastName(entity.getLastName())
                .salaries(entity.getSalaries())
                .borrowerLiabilities(entity.getBorrowerLiabilities())
                .mortgagePlans(entity.getMortgagePlans())
                .build();

    }
}
