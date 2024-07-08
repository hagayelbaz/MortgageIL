package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.UserLiabilityDTO;
import com.example.mortgageil.Models.UserLiability;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {PersonMapper.class})
public interface UserLiabilityMapper extends IMapper<UserLiability, UserLiabilityDTO> {

    UserLiabilityDTO toDTO(UserLiability userLiability);


    UserLiability toEntity(UserLiabilityDTO dto);
}