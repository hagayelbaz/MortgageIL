package com.example.mortgageil.Service;

import com.example.mortgageil.Models.BorrowerLiabilities;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class BorrowerLiabilitiesService extends DBService<BorrowerLiabilities>{
    public BorrowerLiabilitiesService(JpaRepository<BorrowerLiabilities, Long> repository) {
        super(repository);
    }
}
