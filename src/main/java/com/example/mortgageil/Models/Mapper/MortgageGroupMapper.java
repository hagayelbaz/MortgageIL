package com.example.mortgageil.Models.Mapper;

import com.example.mortgageil.Models.DTO.MortgageGroupDTO;
import com.example.mortgageil.Models.MortgageGroup;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.stream.Collectors;

@Mapper(componentModel = "spring", uses = {PersonMapper.class, MortgagePlanMapper.class})
public interface MortgageGroupMapper extends IMapper<MortgageGroup, MortgageGroupDTO> {

    @Mapping(target = "user", ignore = true)
    MortgageGroupDTO toDTO(MortgageGroup mortgageGroup);

    MortgageGroup toEntity(MortgageGroupDTO dto);
}
