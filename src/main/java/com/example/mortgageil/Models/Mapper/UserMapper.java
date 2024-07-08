package com.example.mortgageil.Models.Mapper;

import com.example.mortgageil.Models.DTO.UserDTO;
import com.example.mortgageil.Models.User.User;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {PersonMapper.class, BorrowerMapper.class, UserLiabilityMapper.class, MortgageGroupMapper.class})
public interface UserMapper extends IMapper<User, UserDTO> {
    UserDTO toDTO(User user);

    User toEntity(UserDTO dto);

    /*@AfterMapping
    default void mapCollections(User user, @MappingTarget UserDTO dto, @Context BorrowerMapper borrowerMapper, @Context UserLiabilityMapper userLiabilityMapper, @Context MortgageGroupMapper mortgageGroupMapper) {
        if (user.getBorrowers() != null) {
            dto.setBorrowers(user.getBorrowers().stream()
                    .map(borrowerMapper::toDTO)
                    .collect(Collectors.toList()));
        }
        if (user.getUserLiabilities() != null) {
            dto.setBorrowerLiabilities(user.getUserLiabilities().stream()
                    .map(userLiabilityMapper::toDTO)
                    .collect(Collectors.toList()));
        }
        if (user.getMortgageGroups() != null) {
            dto.setMortgageGroups(user.getMortgageGroups().stream()
                    .map(mortgageGroupMapper::toDTO)
                    .collect(Collectors.toList()));
        }
    }*/
}
