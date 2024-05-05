package com.example.mortgageil.Core.Contracts;

public interface RequestToEntityConverter<Rq, T> {
    T convert(Rq request);
}
