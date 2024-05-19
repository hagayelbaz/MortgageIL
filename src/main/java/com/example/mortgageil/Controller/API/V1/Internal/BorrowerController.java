package com.example.mortgageil.Controller.API.V1.Internal;


import com.example.mortgageil.Models.Request.BorrowerRequest;
import com.example.mortgageil.Service.db.BorrowerService;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/v1/borrower")
public class BorrowerController {

    @Resource(name = "borrowerService")
    private BorrowerService borrowerService;

    @Resource(name = "userService")
    private UserService userService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody BorrowerRequest borrowerRequest) {
        Long userId = borrowerRequest.getUserId();
        borrowerRequest.setUser(userService.getEntityById(userId));
        return ResponseEntity.ok(borrowerService.create(borrowerRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(borrowerService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerService.getById(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody BorrowerRequest borrowerRequest) {
        return ResponseEntity.ok(borrowerService.update(id, borrowerRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        borrowerService.deleteById(id);
        return ResponseEntity.ok().build();
    }
    //</editor-fold>
}
