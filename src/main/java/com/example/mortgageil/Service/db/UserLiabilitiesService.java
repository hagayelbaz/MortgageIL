package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.UserLiability;
import com.example.mortgageil.Models.Repositories.UserLiabilitiesRepository;
import org.springframework.stereotype.Service;

@Service
public class UserLiabilitiesService extends DBService<UserLiability, UserLiabilitiesRepository> {


    public UserLiabilitiesService(UserLiabilitiesRepository repository) {
        super(repository);
    }

    public UserLiability getByUserId(Long id) {
        return repository.findByUserId(id)
                .stream()
                .findFirst()
                .orElse(null);
    }

    public void deleteByUserId(Long id) {
        repository.deleteAllByUserId(id);
    }
}
