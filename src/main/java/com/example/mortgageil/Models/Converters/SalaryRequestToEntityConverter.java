package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Salary;
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

    @Override
    public void applyChanges(SalaryRequest request, Salary entity) {
        entity.setPerson(request.getPerson());
        entity.setSalary(request.getSalary());
        entity.setEmployer(request.getEmployer());
        entity.setStartDate(request.getStartDate());
        entity.setJobTitle(request.getJobTitle());
    }
}
