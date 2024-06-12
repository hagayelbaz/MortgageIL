package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User.User;

public class UserEntityToResponseConverter implements EntityToResponseConverter<User, UserResponse> {

    @Override
    public UserResponse convert(User entity) {
        return UserResponse.builder()
                .id(entity.getId())
                .createdDate(entity.getCreatedDate())
                .lastModifiedDate(entity.getLastModifiedDate())
                .firstName(entity.getFirstName())
                .lastName(entity.getLastName())
                .email(entity.getEmail())
                .phoneNumber(entity.getPhoneNumber())
                .salaries(entity.getSalaries())
                .borrowerLiabilities(entity.getBorrowerLiabilities())
                .mortgagePlans(entity.getMortgagePlans())
                .build();
    }
}
