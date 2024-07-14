package com.example.mortgageil.Models.DTO;

import com.example.mortgageil.Models.User.RoleName;
import lombok.Getter;
import lombok.Setter;

import java.util.HashSet;
import java.util.List;
import java.util.Set;


@Getter
@Setter
public class UserDTO extends PersonDTO {
    private String email;
    private String phoneNumber;
    private String password;
    private RoleName roleName;
    private boolean isFirstLogin;
    private Set<UserLiabilityDTO> borrowerLiabilities;
    private Set<BorrowerDTO> borrowers;
    private Set<MortgageGroupDTO> mortgageGroups;
}
