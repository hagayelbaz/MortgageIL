package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.LoanData;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LoanDataRepository extends JpaRepository<LoanData, Long> {
    LoanData findByUser_Id(Long userId);
}
