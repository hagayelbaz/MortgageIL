package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.LoanData;
import com.example.mortgageil.Models.Repositories.LoanDataRepository;
import org.springframework.stereotype.Service;

@Service
public class LoanDataService extends DBService<LoanData, LoanDataRepository>{

    public LoanDataService(LoanDataRepository repository) {
        super(repository);
    }

    public LoanData getByUserId(Long userId) {
        return repository.findByUser_Id(userId);
    }
}
