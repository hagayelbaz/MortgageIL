package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.Borrower;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BorrowerRepository extends JpaRepository<Borrower, Long> {
}
