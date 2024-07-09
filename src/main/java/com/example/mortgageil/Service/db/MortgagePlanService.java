package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Repositories.MortgagePlanRepository;
import org.springframework.stereotype.Service;

@Service
public class MortgagePlanService extends DBService<MortgagePlan, MortgagePlanRepository>{


    public MortgagePlanService(MortgagePlanRepository repository) {
        super(repository);
    }

    /*public MortgagePlan getByPersonId(Long id) {
        return repository.findByUserId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }*/

    public void deleteAllByPersonId(Long id) {
        //repository.deleteAllByUserId(id);
    }
}
