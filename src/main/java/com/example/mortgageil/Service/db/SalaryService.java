package com.example.mortgageil.Service.db;


import com.example.mortgageil.Models.Repositories.SalaryRepository;
import com.example.mortgageil.Models.Salary;
import org.springframework.stereotype.Service;

@Service
public class SalaryService extends DBService<Salary, SalaryRepository> {


    public SalaryService(SalaryRepository repository) {
        super(repository);
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
