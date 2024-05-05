package com.example.mortgageil.Service;

import com.example.mortgageil.Models.MortgagePlan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class MortgagePlanService extends DBService<MortgagePlan>{
    public MortgagePlanService(JpaRepository<MortgagePlan, Long> repository) {
        super(repository);
    }
}
