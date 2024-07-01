package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;

import java.util.HashSet;
import java.util.Set;
import java.util.stream.Collectors;

public class UtilConverter {
    public static <T, Rq> Set<T> convertList(Set<Rq> requests, RequestToEntityConverter<Rq, T> converter) {
        if(requests == null || requests.isEmpty())
            return new HashSet<>();
        var a =  requests.stream()
                .map(converter::convert)
                .collect(Collectors.toSet());
        return a;
    }
}
