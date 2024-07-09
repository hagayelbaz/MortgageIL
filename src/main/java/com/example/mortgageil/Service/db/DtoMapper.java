package com.example.mortgageil.Service.db;

//this class should map any object or list of objects to a DTO object or list of DTO objects

import com.example.mortgageil.Models.Mapper.IMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class DtoMapper <M extends IMapper<T, O>, T, O> {

    private final M mapper;

    public DtoMapper(M mapper) {
        this.mapper = mapper;
    }

    public O toDTO(T entity) {
        return mapper.toDTO(entity);
    }

    public T toEntity(O dto) {
        return mapper.toEntity(dto);
    }

    public List<O> toDTO(List<T> entities) {
        return entities.stream().map(mapper::toDTO).collect(Collectors.toList());
    }

    public List<T> toEntity(List<O> dtos) {
        return dtos.stream().map(mapper::toEntity).collect(Collectors.toList());
    }

    List<O> toDTO(Iterable<T> entities) {
        return StreamSupport.stream(entities.spliterator(), false)
                .map(mapper::toDTO)
                .collect(Collectors.toList());
    }

    List<T> toEntity(Iterable<O> dtos) {
        return StreamSupport.stream(dtos.spliterator(), false)
                .map(mapper::toEntity)
                .collect(Collectors.toList());
    }
}
