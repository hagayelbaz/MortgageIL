package com.example.mortgageil.Models.DTO;

import lombok.Getter;
import lombok.Setter;

import java.util.Date;


@Getter
@Setter
public class UserLiabilityDTO {
    private Long id;
    private double amount;
    private Date endDate;
    private String description;
    private UserDTO user;
}
