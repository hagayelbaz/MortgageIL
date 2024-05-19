package com.example.mortgageil.Core.Contracts;

public interface FluentData <T>{
    T get();
    FluentData<T> in(String key);
}
