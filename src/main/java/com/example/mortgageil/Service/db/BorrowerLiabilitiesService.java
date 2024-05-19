package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Converters.BorrowerLiabilitiesEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.BorrowerLiabilitiesRequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.BorrowerLiabilitiesRepository;
import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Models.Response.BorrowerLiabilitiesResponse;
import org.springframework.stereotype.Service;

@Service
public class BorrowerLiabilitiesService extends DBService<
        BorrowerLiabilities,
        BorrowerLiabilitiesRequest,
        BorrowerLiabilitiesResponse,
        BorrowerLiabilitiesRepository> {


    public BorrowerLiabilitiesService(BorrowerLiabilitiesRepository repository) {
        super(new BorrowerLiabilitiesRequestToEntityConverter(),
                new BorrowerLiabilitiesEntityToResponseConverter(),
                repository);
    }

    public BorrowerLiabilities getByPersonId(Long id) {
        return repository.findByPersonId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }

    public void deleteAllByPersonId(Long id) {
        repository.deleteAllByPersonId(id);
    }
}
