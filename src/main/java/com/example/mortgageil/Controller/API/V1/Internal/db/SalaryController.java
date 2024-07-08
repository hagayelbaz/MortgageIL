package com.example.mortgageil.Controller.API.V1.Internal.db;

import com.example.mortgageil.Models.DTO.PersonDTO;
import com.example.mortgageil.Models.DTO.SalaryDTO;
import com.example.mortgageil.Models.Mapper.PersonMapper;
import com.example.mortgageil.Models.Mapper.SalaryMapper;
import com.example.mortgageil.Models.Person;
import com.example.mortgageil.Models.Salary;
import com.example.mortgageil.Service.db.DtoMapper;
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


    @Resource(name = "salaryMapper")
    private SalaryMapper mapper;

    @Resource(name = "personMapper")
    private PersonMapper personMapper;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody SalaryDTO salaryDTO) {
        Long personId = salaryDTO.getPersonId();
        salaryDTO.setPersonId(personId);
        return ResponseEntity.ok(salaryService.save(mapper.toEntity(salaryDTO)));
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
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody SalaryDTO salaryRequest) {
        return ResponseEntity.ok(salaryService.update(id, mapper.toEntity(salaryRequest)));
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
