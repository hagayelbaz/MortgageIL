package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.MortgageGroup;
import com.example.mortgageil.Models.Repositories.MortgageGroupRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Set;


@Service
public class MortgageGroupService extends DBService<MortgageGroup, MortgageGroupRepository>{

    public MortgageGroupService(MortgageGroupRepository repository) {
        super(repository);
    }


    public Set<MortgageGroup> getAllByUserId(Long id) {
        return repository.findByUserId(id);
    }

    public void deleteAllByPersonId(Long id) {
        repository.deleteAllByUserId(id);
    }
}
