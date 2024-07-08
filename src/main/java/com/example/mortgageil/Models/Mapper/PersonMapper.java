package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.PersonDTO;
import com.example.mortgageil.Models.Person;
import org.mapstruct.*;
import org.mapstruct.factory.Mappers;

import java.util.stream.Collectors;

@Mapper(componentModel = "spring"/*, uses = {SalaryMapper.class}*/)
public interface PersonMapper extends IMapper<Person, PersonDTO> {

    PersonDTO toDTO(Person person);


    Person toEntity(PersonDTO dto);

    /*@AfterMapping
    default void mapSalaries(Person person, @MappingTarget PersonDTO dto, @Context SalaryMapper salaryMapper) {
        if (person.getSalaries() != null) {
            dto.setSalaries(person.getSalaries().stream()
                    .map(salaryMapper::toDTO)
                    .collect(Collectors.toList()));
        }
    }*/
}