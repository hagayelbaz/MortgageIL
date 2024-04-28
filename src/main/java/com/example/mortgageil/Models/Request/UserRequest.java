package com.example.mortgageil.Models.Request;

import com.example.mortgageil.Models.User;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Pattern;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserRequest {
    @NotEmpty(message = "First name is required")
    private String firstName;
    @NotEmpty(message = "Last name is required")
    private String lastName;
    @Email(message = "Email is required")
    private String email;
    //@Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{7}$", message = "Phone number is required")
    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;
}
