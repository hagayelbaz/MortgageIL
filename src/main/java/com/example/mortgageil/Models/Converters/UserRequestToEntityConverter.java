package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.User;

public class UserRequestToEntityConverter implements RequestToEntityConverter<UserRequest, User> {
    @Override
    public User convert(UserRequest request) {
        return User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .build();
    }
}
