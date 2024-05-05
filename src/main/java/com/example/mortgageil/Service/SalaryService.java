package com.example.mortgageil.Service;


import com.example.mortgageil.Models.Salary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class SalaryService extends DBService<Salary> {

    public SalaryService(JpaRepository<Salary, Long> repository) {
        super(repository);
    }
}
