package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Repositories.BorrowerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowerService extends DBService<Borrower, BorrowerRepository> {

    public BorrowerService(BorrowerRepository repository) {
        super(repository);
    }

    public List<Borrower> getAllByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }

    public Borrower findByEmail(String email) {
        return repository.findByEmail(email);
    }
}
