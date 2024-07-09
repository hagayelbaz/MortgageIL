package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Models.DTO.UserDTO;
import com.example.mortgageil.Models.Mapper.UserMapper;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.db.DtoMapper;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;


@RestController
@RequestMapping("/api/v1/user")
public class UserController {

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "userMapper")
    private UserMapper mapper;


    //<editor-fold desc="create">
    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<?> create(@RequestBody UserDTO userDTO) {
        return ResponseEntity.ok(userService.save(mapper.toEntity(userDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(null);
        //return ResponseEntity.ok(mapper.toDTO(userService.getAllList()));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(mapper.toDTO(userService.getById(id)));
    }

    @GetMapping("/default")
    public ResponseEntity<?> getDefault(Principal principal) {
        return ResponseEntity.ok(mapper.toDTO(userService.findByEmail(principal.getName())));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody UserDTO userDTO) {
        var user = userService.getById(id);
        userDTO.setId(user.getId());
        return ResponseEntity.ok(mapper.toDTO(userService.update(id, mapper.toEntity(userDTO))));
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
