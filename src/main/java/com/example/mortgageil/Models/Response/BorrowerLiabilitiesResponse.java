package com.example.mortgageil.Models.Response;

import com.example.mortgageil.Models.Person;
import jakarta.validation.constraints.NotEmpty;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
@Builder
public class BorrowerLiabilitiesResponse {
   private Long id;
    private double amount;
    private Date endDate;
    private Person person;
}
