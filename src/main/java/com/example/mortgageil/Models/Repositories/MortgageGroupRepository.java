package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.MortgageGroup;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface MortgageGroupRepository extends JpaRepository<MortgageGroup, Long> {

    void deleteAllByUserId(Long id);
    Set<MortgageGroup> findByUserId(Long id);
}
