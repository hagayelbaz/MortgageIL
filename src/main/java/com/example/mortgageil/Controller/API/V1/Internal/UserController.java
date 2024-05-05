package com.example.mortgageil.Controller.API.V1.Internal;


import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.User;
import com.example.mortgageil.Service.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.logging.Logger;


@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    private static final Logger LOGGER = Logger.getLogger(UserController.class.getName());

    //<editor-fold desc="create">
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> create(@RequestBody UserRequest userRequest) {
        LOGGER.info("Creating user: " + userRequest.getFirstName()
                + " " + userRequest.getLastName()
                + " " + userRequest.getEmail()
                + " " + userRequest.getPhoneNumber());

        return ResponseEntity.ok(userService.create(userRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(userService.getById(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody UserRequest userRequest) {
        return ResponseEntity.ok(userService.update(id, userRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        userService.deleteById(id);
        return ResponseEntity.ok().build();
    }
    //</editor-fold>
}
