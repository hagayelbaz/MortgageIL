package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Models.DTO.UserLiabilityDTO;
import com.example.mortgageil.Models.Mapper.UserLiabilityMapper;
import com.example.mortgageil.Models.Mapper.UserMapper;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.db.UserLiabilitiesService;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/borrower-liabilities")
public class UserLiabilitiesController {

    @Resource(name = "userLiabilitiesService")
    private UserLiabilitiesService userLiabilitiesService;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "userLiabilityMapper")
    private UserLiabilityMapper mapper;

    @Resource(name = "userMapper")
    private UserMapper userMapper;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody UserLiabilityDTO userLiabilityDTO) {
        User user = userService.findByEmail(principal.getName());
        userLiabilityDTO.setUser(userMapper.toDTO(user));
        return ResponseEntity.ok(userLiabilitiesService.save(mapper.toEntity(userLiabilityDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(userLiabilitiesService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(userLiabilitiesService.getById(id));
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<?> getByPersonId(@PathVariable Long id) {
        return ResponseEntity.ok(userLiabilitiesService.getByUserId(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody UserLiabilityDTO userLiabilityDTO) {
        return ResponseEntity.ok(userLiabilitiesService.update(id, mapper.toEntity(userLiabilityDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        userLiabilitiesService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<?> deleteByPersonId(@PathVariable Long id) {
        userLiabilitiesService.deleteByUserId(id);
        return ResponseEntity.ok().build();
    }
}
