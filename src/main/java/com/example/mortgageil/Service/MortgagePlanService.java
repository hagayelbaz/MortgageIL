package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Converters.MortgagePlanEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.MortgagePlanRequestToEntityConverter;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Person;
import com.example.mortgageil.Models.Repositories.MortgagePlanRepository;
import com.example.mortgageil.Models.Request.MortgagePlanRequest;
import com.example.mortgageil.Models.Response.MortgagePlanResponse;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class MortgagePlanService extends DBService<
        MortgagePlan,
        MortgagePlanRequest,
        MortgagePlanResponse,
        MortgagePlanRepository>{


    public MortgagePlanService(MortgagePlanRepository repository) {
        super(new MortgagePlanRequestToEntityConverter(),
                new MortgagePlanEntityToResponseConverter(),
                repository);
    }

    public MortgagePlan getByPersonId(Long id) {
        return repository.findByPersonId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }

    public void deleteAllByPersonId(Long id) {
        repository.deleteAllByPersonId(id);
    }
}
