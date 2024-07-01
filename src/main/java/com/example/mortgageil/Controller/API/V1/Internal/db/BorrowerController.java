package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Classes.HttpResponse;
import com.example.mortgageil.Models.Request.BorrowerRequest;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.db.BorrowerService;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.logging.Logger;


@RestController
@RequestMapping("/api/v1/borrower")
public class BorrowerController {

    @Resource(name = "borrowerService")
    private BorrowerService borrowerService;

    @Resource(name = "userService")
    private UserService userService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody BorrowerRequest borrowerRequest) {
        Long userId = userService.findByEmail(principal.getName()).get().getId();
        borrowerRequest.setUser(userService.getEntityById(userId));
        return ResponseEntity.ok(borrowerService.create(borrowerRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll(Principal principal) {
        Long userId = userService.findByEmail(principal.getName()).get().getId();
        return  ResponseEntity.ok(borrowerService.getAllByUserId(userId));
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerService.getById(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(Principal principal,@PathVariable Long id, @RequestBody BorrowerRequest borrowerRequest) {
        User user = userService.findByEmail(principal.getName()).get();
        borrowerRequest.setUser(user);
        return ResponseEntity.ok(borrowerService.update(id, borrowerRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        borrowerService.deleteById(id);
        var response = HttpResponse
                .builder()
                .status(200)
                .message("Borrower deleted successfully");
        return ResponseEntity.ok(response.build());
    }
    //</editor-fold>
}
