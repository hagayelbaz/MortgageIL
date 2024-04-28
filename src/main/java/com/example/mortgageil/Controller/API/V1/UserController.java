package com.example.mortgageil.Controller.API.V1;


import com.example.mortgageil.Models.Converters.UserConverterService;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Service.UserService;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;

@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    private static final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    //<editor-fold desc="Create">
    @PostMapping("")
    public ResponseEntity<?> createUser(@Valid @RequestBody UserRequest userRequest) {
        LOGGER.info("Creating user: " + userRequest.toString() + " ...");
        return ResponseEntity.ok(userService.createUser(userRequest));
    }
    //</editor-fold>

    //<editor-fold desc="Read">
    @GetMapping("/{id}")
    public ResponseEntity<?> getUser(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getUser(id));
    }

    @GetMapping("/email/{email}")
    public ResponseEntity<?> getUserByEmail(@PathVariable String email) {
        return ResponseEntity.ok(userService.getUserByEmail(email));
    }

    @GetMapping("")
    public ResponseEntity<?> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }

    //</editor-fold>

    //<editor-fold desc="Update">
    //TODO: Implement update user
    //</editor-fold>

    //<editor-fold desc="Delete">
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userService.deleteUser(id);
    }

    @DeleteMapping("")
    public void deleteAllUsers() {
        userService.deleteAllUsers();
    }

    @DeleteMapping("/email/{email}")
    public void deleteUserByEmail(@PathVariable String email) {
        userService.deleteUserByEmail(email);
    }

    //</editor-fold>
}
