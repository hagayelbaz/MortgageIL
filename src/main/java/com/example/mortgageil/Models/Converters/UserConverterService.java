package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User;
import org.springframework.stereotype.Service;

@Service
public class UserConverterService {

    public User convertFromRequest(UserRequest userRequest) {
        return User.builder()
                .email(userRequest.getEmail())
                //.firstName(userRequest.getFirstName())
                //.lastName(userRequest.getLastName())
                .phoneNumber(userRequest.getPhoneNumber())
                .build();
    }

    public UserResponse convertToResponse(User user) {
        return UserResponse.builder()
                .email(user.getEmail())
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .phoneNumber(user.getPhoneNumber())
                .build();
    }
}
