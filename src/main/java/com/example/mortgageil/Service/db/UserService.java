package com.example.mortgageil.Service.db;


import com.example.mortgageil.Models.Converters.UserEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.UserRequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User.RoleName;
import com.example.mortgageil.Models.User.User;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService extends DBService<
        User,
        UserRequest,
        UserResponse,
        UserRepository> {


    public UserService(UserRepository repository) {
        super(new UserRequestToEntityConverter(),
                new UserEntityToResponseConverter(),
                repository);
    }

    public boolean isUserExistByEmail(String email) {
        return repository.existsByEmail(email);
    }

    public Optional<User> findByEmail(String email) {
        return repository.findByEmail(email);
    }


}
