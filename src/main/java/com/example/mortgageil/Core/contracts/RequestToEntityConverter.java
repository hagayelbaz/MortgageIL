package com.example.mortgageil.Core.contracts;

import java.util.Set;

public interface RequestToEntityConverter<Rq, T> {
    T convert(Rq request);
    void applyChanges(Rq request, T entity);
}
