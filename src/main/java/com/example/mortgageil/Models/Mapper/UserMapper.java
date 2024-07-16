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
}
