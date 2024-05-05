package com.example.mortgageil.Service;


import com.example.mortgageil.Models.Converters.SalaryEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.SalaryRequestToEntityConverter;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Response.SalaryResponse;
import com.example.mortgageil.Models.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class SalaryService
        extends DBService<
        Salary,
        SalaryRequest,
        SalaryResponse> {

    public SalaryService(JpaRepository<Salary, Long> repository) {
        super(repository,
                new SalaryRequestToEntityConverter(),
                new SalaryEntityToResponseConverter());
    }
}
