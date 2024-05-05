package com.example.mortgageil.Service;

import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Converters.BorrowerLiabilitiesEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.BorrowerLiabilitiesRequestToEntityConverter;
import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Models.Response.BorrowerLiabilitiesResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class BorrowerLiabilitiesService
        extends DBService<
        BorrowerLiabilities,
        BorrowerLiabilitiesRequest,
        BorrowerLiabilitiesResponse>{


    public BorrowerLiabilitiesService(JpaRepository<BorrowerLiabilities, Long> repository) {
        super(repository,
                new BorrowerLiabilitiesRequestToEntityConverter(),
                new BorrowerLiabilitiesEntityToResponseConverter());
    }
}
