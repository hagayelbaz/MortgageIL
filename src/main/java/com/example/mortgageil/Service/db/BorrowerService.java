package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Converters.BorrowerEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.BorrowerRequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.BorrowerRepository;
import com.example.mortgageil.Models.Request.BorrowerRequest;
import com.example.mortgageil.Models.Response.BorrowerResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BorrowerService extends DBService<
        Borrower,
        BorrowerRequest,
        BorrowerResponse,
        BorrowerRepository> {

    public BorrowerService(BorrowerRepository repository) {
        super(new BorrowerRequestToEntityConverter(),
                new BorrowerEntityToResponseConverter(),
                repository);
    }

    public List<Borrower> getAllByUserId(Long userId) {
        return repository.findAllByUserId(userId);
    }
}
