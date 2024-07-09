package com.example.mortgageil.Models.DTO;


import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;
import java.util.Set;

@Getter
@Setter
public class MortgageGroupDTO {
    private Long id;
    private Date createdDate;
    private Date lastModifiedDate;
    private String groupName;
    private UserDTO user;
    private Set<MortgagePlanDTO> mortgagePlans;
}