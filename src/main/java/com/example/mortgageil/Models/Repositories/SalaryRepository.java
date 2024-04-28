package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.Salary;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SalaryRepository extends JpaRepository<Salary, Long> {
    List<Salary> findAllByUserId(Long userId);
    void deleteAllByUserId(Long userId);
}
