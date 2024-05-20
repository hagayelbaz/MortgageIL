package com.example.mortgageil.Core.contracts;

public interface RequestToEntityConverter<Rq, T> {
    T convert(Rq request);
}
