package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.PersonRepository;
import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Salary;
import com.example.mortgageil.Models.User;
import com.example.mortgageil.Service.UserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;


@Service
public class SalaryRequestToEntityConverter
        implements RequestToEntityConverter<SalaryRequest, Salary> {


    @Override
    public Salary convert(SalaryRequest request) {
        return Salary.builder()
                .person(request.getPerson())
                .salary(request.getSalary())
                .employer(request.getEmployer())
                .startDate(request.getStartDate())
                .jobTitle(request.getJobTitle())
                .build();
    }
}
