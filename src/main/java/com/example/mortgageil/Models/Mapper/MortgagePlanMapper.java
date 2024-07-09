package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.MortgagePlanDTO;
import com.example.mortgageil.Models.MortgagePlan;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface MortgagePlanMapper extends IMapper<MortgagePlan, MortgagePlanDTO> {


    @Mapping(target = "mortgageGroupId", source = "mortgageGroup.id")
    MortgagePlanDTO toDTO(MortgagePlan plan);


    MortgagePlan toEntity(MortgagePlanDTO dto);
}
