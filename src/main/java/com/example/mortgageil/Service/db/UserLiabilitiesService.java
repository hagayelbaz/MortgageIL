package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.UserLiability;
import com.example.mortgageil.Models.Repositories.UserLiabilitiesRepository;
import org.springframework.stereotype.Service;

@Service
public class UserLiabilitiesService extends DBService<UserLiability, UserLiabilitiesRepository> {


    public UserLiabilitiesService(UserLiabilitiesRepository repository) {
        super(repository);
    }

    public UserLiability getByPersonId(Long id) {
        return repository.findByUserId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }

    public void deleteAllByPersonId(Long id) {
        repository.deleteAllByUserId(id);
    }
}
