package com.example.mortgageil.Core.contracts;

public interface EntityToResponseConverter<T, Rs> {
    Rs convert(T entity);
}