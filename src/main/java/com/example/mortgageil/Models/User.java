package com.example.mortgageil.Models;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "users")
public class User extends Person{

    @Email(message = "Email is required")
    private String email;

    //TODO: implement auth with password etc.

    //@Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{7}$", message = "Phone number is required")
    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;
}
