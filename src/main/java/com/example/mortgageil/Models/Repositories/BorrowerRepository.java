package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BorrowerRepository extends JpaRepository<Borrower, Long> {
    List<Borrower> findAllByUserId(Long userId);
}
