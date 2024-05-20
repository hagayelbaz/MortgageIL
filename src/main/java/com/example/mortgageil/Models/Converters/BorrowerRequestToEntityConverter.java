package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Request.BorrowerRequest;

public class BorrowerRequestToEntityConverter
        implements RequestToEntityConverter<BorrowerRequest, Borrower> {

    @Override
    public Borrower convert(BorrowerRequest request) {
        return Borrower.builder()
                .user(request.getUser())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .build();
    }
}
