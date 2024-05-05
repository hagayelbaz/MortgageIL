package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Response.SalaryResponse;
import com.example.mortgageil.Models.Salary;
import com.example.mortgageil.Service.UserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@Service
public class SalaryConverterService {

    @Resource(name = "userService")
    private UserService userService;

    public Salary convertFromRequest(SalaryRequest salaryRequest) {
        return Salary.builder()
                //.user(userService.getUser(salaryRequest.getUserId()))
                .salary(salaryRequest.getSalary())
                .employer(salaryRequest.getEmployer())
                .startDate(salaryRequest.getStartDate())
                .jobTitle(salaryRequest.getJobTitle())
                .build();
    }

    public Iterable<Salary> convertFromRequestList(Iterable<SalaryRequest> salaryRequests) {
        return StreamSupport.stream(salaryRequests.spliterator(), false)
                .map(this::convertFromRequest)
                .collect(Collectors.toList());
    }

    public SalaryResponse convertToResponse(Salary salary) {
        return SalaryResponse.builder()
                .id(salary.getId())
                //.user(salary.getUser())
                .salary(salary.getSalary())
                .employer(salary.getEmployer())
                .startDate(salary.getStartDate())
                .jobTitle(salary.getJobTitle())
                .build();
    }

    public Iterable<SalaryResponse> convertToResponseList(Iterable<Salary> salaries) {
        return StreamSupport.stream(salaries.spliterator(), false)
                .map(this::convertToResponse)
                .collect(Collectors.toList());
    }
}
