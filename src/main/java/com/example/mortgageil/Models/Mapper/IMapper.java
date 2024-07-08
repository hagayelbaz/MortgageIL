package com.example.mortgageil.Models.Mapper;

public interface IMapper <T, DTO>{
    DTO toDTO(T entity);
    T toEntity(DTO dto);
}
