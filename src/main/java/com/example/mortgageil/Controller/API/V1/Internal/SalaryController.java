package com.example.mortgageil.Controller.API.V1.Internal;

import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Service.db.PersonService;
import com.example.mortgageil.Service.db.SalaryService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/salary")
public class SalaryController {

    @Resource(name = "salaryService")
    private SalaryService salaryService;

    @Resource(name = "personService")
    private PersonService personService;


    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody SalaryRequest salaryRequest) {
        Long userId = salaryRequest.getPersonId();
        salaryRequest.setPerson(personService.getById(userId));
        return ResponseEntity.ok(salaryService.create(salaryRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(salaryService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(salaryService.getById(id));
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<?> getByPersonId(@PathVariable Long id) {
        return ResponseEntity.ok(salaryService.getByPersonId(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody SalaryRequest salaryRequest) {
        return ResponseEntity.ok(salaryService.update(id, salaryRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        salaryService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<?> deleteByPersonId(@PathVariable Long id) {
        salaryService.deleteByPersonId(id);
        return ResponseEntity.ok().build();
    }
    //</editor-fold>
}
