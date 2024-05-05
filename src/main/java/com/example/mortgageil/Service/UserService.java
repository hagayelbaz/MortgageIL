package com.example.mortgageil.Service;


import com.example.mortgageil.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Service;

@Service
public class UserService extends DBService<User>{

    public UserService(JpaRepository<User, Long> repository) {
        super(repository);
    }
}
