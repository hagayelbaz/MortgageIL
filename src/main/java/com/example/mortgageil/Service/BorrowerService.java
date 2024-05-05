package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class BorrowerService extends DBService<Borrower>{
    public BorrowerService(JpaRepository<Borrower, Long> repository) {
        super(repository);
    }
}
