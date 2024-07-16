package com.example.mortgageil.Models.Mapper;

import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.DTO.BorrowerDTO;
import com.example.mortgageil.Models.DTO.UserDTO;
import com.example.mortgageil.Models.User.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring", uses = {PersonMapper.class})
public interface BorrowerMapper extends IMapper<Borrower, BorrowerDTO> {
    BorrowerDTO toDTO(Borrower borrower);
    Borrower toEntity(BorrowerDTO dto);
}