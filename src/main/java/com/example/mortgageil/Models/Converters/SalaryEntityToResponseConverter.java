package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Models.Response.SalaryResponse;
import com.example.mortgageil.Models.Salary;

public class SalaryEntityToResponseConverter
        implements EntityToResponseConverter<Salary, SalaryResponse> {

    @Override
    public SalaryResponse convert(Salary entity) {
        return SalaryResponse.builder()
                .id(entity.getId())
                .createdDate(entity.getCreatedDate())
                .lastModifiedDate(entity.getLastModifiedDate())
                .person(entity.getPerson())
                .salary(entity.getSalary())
                .employer(entity.getEmployer())
                .startDate(entity.getStartDate())
                .jobTitle(entity.getJobTitle())
                .build();
    }
}
