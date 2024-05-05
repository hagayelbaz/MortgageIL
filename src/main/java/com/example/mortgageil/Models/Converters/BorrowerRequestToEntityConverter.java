package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Request.BorrowerRequest;

public class BorrowerRequestToEntityConverter
        implements RequestToEntityConverter<BorrowerRequest, Borrower> {

    @Override
    public Borrower convert(BorrowerRequest request) {
        return Borrower.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .build();
    }
}
