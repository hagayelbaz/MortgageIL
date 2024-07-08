package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MortgagePlanRepository extends JpaRepository<MortgagePlan, Long> {

    //List<MortgagePlan> findByUserId(Long id);

    //void deleteAllByUserId(Long id);
}
