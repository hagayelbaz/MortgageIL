package com.example.mortgageil.Core.contracts;

public interface FluentData <T>{
    T get();
    FluentData<T> in(String key);
}
