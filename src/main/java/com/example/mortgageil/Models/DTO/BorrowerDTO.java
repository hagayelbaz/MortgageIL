package com.example.mortgageil.Models.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BorrowerDTO extends PersonDTO {
    private String email;
    private String phoneNumber;
    private UserDTO user;
}
