package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Models.User.User;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class BorrowerRequest {

    private Long id;

    @NotEmpty(message = "First name is required")
    private String firstName;

    @NotEmpty(message = "Last name is required")
    private String lastName;

    private String email;

    private String phoneNumber;

    private User user;
}
