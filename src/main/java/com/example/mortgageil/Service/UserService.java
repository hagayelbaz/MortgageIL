package com.example.mortgageil.Service;


import com.example.mortgageil.Models.Converters.UserEntityToResponseConverter;
import com.example.mortgageil.Models.Converters.UserRequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User;
import org.springframework.stereotype.Service;

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
}
