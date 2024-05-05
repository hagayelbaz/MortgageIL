package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Converters.BorrowerEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.BorrowerLiabilitiesRequestToEntityConverter;
import com.example.mortgageil.Models.Converters.BorrowerRequestToEntityConverter;
import com.example.mortgageil.Models.Request.BorrowerRequest;
import com.example.mortgageil.Models.Response.BorrowerResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class BorrowerService
        extends DBService<
        Borrower,
        BorrowerRequest,
        BorrowerResponse> {

    public BorrowerService(JpaRepository<Borrower, Long> repository) {
        super(repository,
                new BorrowerRequestToEntityConverter(),
                new BorrowerEntityToResponseConverter());
    }
}
