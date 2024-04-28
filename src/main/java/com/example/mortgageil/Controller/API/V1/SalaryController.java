package com.example.mortgageil.Controller.API.V1;


import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Service.SalaryService;
import jakarta.annotation.Resource;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/salary")
public class SalaryController {

    @Resource(name = "salaryService")
    private SalaryService salaryService;

    //<editor-fold desc="Create">
    @PostMapping("")
    public ResponseEntity<?> createSalary(@Valid @RequestBody SalaryRequest salaryRequest) {
        salaryService.createSalaryFromRequest(salaryRequest);
        return ResponseEntity.ok("Salary created successfully");
    }
    //</editor-fold>

    //<editor-fold desc="Read">

    @GetMapping("")
    public ResponseEntity<?> getAllSalaries() {
        return ResponseEntity.ok(salaryService.getSalariesResponse());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getSalary(@PathVariable Long id) {
        return ResponseEntity.ok(salaryService.getUsersSalariesResponse(id));
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<?> getSalaryByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(salaryService.getUsersSalariesResponse(userId));
    }

    //</editor-fold>
}
