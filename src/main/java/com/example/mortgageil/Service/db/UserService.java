package com.example.mortgageil.Service.db;


import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.User.User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService extends DBService<User, UserRepository> {


    public UserService(UserRepository repository) {
        super(repository);
    }

    public boolean isUserExistByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public User findByEmail(String email) {
        return repository.findByEmail(email).orElse(null);
    }


}
