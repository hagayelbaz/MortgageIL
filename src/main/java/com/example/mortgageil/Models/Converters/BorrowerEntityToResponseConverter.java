package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Response.BorrowerResponse;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User;

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
