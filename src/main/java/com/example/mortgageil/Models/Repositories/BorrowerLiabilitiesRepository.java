package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.BorrowerLiabilities;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BorrowerLiabilitiesRepository extends JpaRepository<BorrowerLiabilities, Long> {

    List<BorrowerLiabilities> findByPersonId(Long id);

    void deleteAllByPersonId(Long id);
}
