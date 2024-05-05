package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Salary;
import com.example.mortgageil.Models.User;

public class SalaryRequestToEntityConverter
        implements RequestToEntityConverter<SalaryRequest, Salary> {
    @Override
    public Salary convert(SalaryRequest request) {
        return Salary.builder()
                .salary(request.getSalary())
                .employer(request.getEmployer())
                .startDate(request.getStartDate())
                .jobTitle(request.getJobTitle())
                .build();

        //TODO: Add person and user
    }
}
