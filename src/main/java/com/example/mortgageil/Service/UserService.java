package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Converters.UserConverterService;
import com.example.mortgageil.Models.Repositories.UserRepository;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.Response.UserResponse;
import com.example.mortgageil.Models.User;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {

    @Resource(name = "userRepository")
    private UserRepository userRepository;

    @Resource(name = "userConverterService")
    private UserConverterService userConverterService;


    //<editor-fold desc="Create">
    public User createUser(User user) {
        return userRepository.save(user);
    }

    public UserResponse createUser(UserRequest userRequest) {
        User user = userConverterService.convertFromRequest(userRequest);
        return userConverterService.convertToResponse(userRepository.save(user));
    }

    //</editor-fold>

    //<editor-fold desc="Read">
    public User getUser(Long id) {
        return userRepository.findById(id).orElse(null);
    }

    public UserResponse getUserResponse(Long id) {
        return userConverterService.convertToResponse(
                Objects.requireNonNull(
                        userRepository.findById(id).orElse(null)));
    }

    public User getUserByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public UserResponse getUserResponseByEmail(String email) {
        return userConverterService.convertToResponse(
                Objects.requireNonNull(
                        userRepository.findByEmail(email)));
    }

    public Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Iterable<UserResponse> getAllUsersResponse() {
        return userRepository.findAll().stream()
                .map(userConverterService::convertToResponse)
                .collect(Collectors.toList());
    }
    //</editor-fold>

    //<editor-fold desc="Update">
    //TODO: Implement update user
    //</editor-fold>

    //<editor-fold desc="Delete">
    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }

    public void deleteAllUsers() {
        userRepository.deleteAll();
    }

    public void deleteUserByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if(user != null) {
            userRepository.delete(user);
        }
    }
    //</editor-fold>

}
