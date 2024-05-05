package com.example.mortgageil.Core.Contracts;

public interface EntityToResponseConverter<T, Rs> {
    Rs convert(T entity);
}