package com.example.mortgageil.Service.db;


import com.example.mortgageil.Models.Converters.SalaryEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.SalaryRequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.SalaryRepository;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Response.SalaryResponse;
import com.example.mortgageil.Models.Salary;
import org.springframework.stereotype.Service;

@Service
public class SalaryService extends DBService<
        Salary,
        SalaryRequest,
        SalaryResponse,
        SalaryRepository> {


    public SalaryService(SalaryRepository salaryRepository) {
        super(new SalaryRequestToEntityConverter(),
                new SalaryEntityToResponseConverter(),
                salaryRepository);
    }

    public Salary getByPersonId(Long id) {
        return repository.findByPersonId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }

    public void deleteByPersonId(Long id) {
        repository.deleteAllByPersonId(id);
    }
}
