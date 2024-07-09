package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.SalaryDTO;
import com.example.mortgageil.Models.Salary;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring"/*, uses = {PersonMapper.class}*/)
public interface SalaryMapper extends IMapper<Salary, SalaryDTO> {

    @Mapping(target = "personId", source = "person.id")
    SalaryDTO toDTO(Salary salary);


    Salary toEntity(SalaryDTO dto);
}