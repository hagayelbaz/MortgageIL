package com.example.mortgageil.Classes;


import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Builder
@Getter
@Setter
public class HttpResponse <T> {
    private T data;
    private String message;
    private int status;
    private String error;
}
