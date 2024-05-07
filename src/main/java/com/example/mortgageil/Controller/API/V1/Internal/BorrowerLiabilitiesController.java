package com.example.mortgageil.Controller.API.V1.Internal;


import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Service.BorrowerLiabilitiesService;
import com.example.mortgageil.Service.PersonService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/borrower-liabilities")
public class BorrowerLiabilitiesController {

    @Resource(name = "borrowerLiabilitiesService")
    private BorrowerLiabilitiesService borrowerLiabilitiesService;

    @Resource(name = "personService")
    private PersonService personService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody BorrowerLiabilitiesRequest borrowerLiabilitiesRequest) {
        Long userId = borrowerLiabilitiesRequest.getPersonId();
        borrowerLiabilitiesRequest.setPerson(personService.getById(userId));
        return ResponseEntity.ok(borrowerLiabilitiesService.create(borrowerLiabilitiesRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(borrowerLiabilitiesService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerLiabilitiesService.getById(id));
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<?> getByPersonId(@PathVariable Long id) {
        return ResponseEntity.ok(borrowerLiabilitiesService.getByPersonId(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody BorrowerLiabilitiesRequest borrowerLiabilitiesRequest) {
        return ResponseEntity.ok(borrowerLiabilitiesService.update(id, borrowerLiabilitiesRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        borrowerLiabilitiesService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<?> deleteByPersonId(@PathVariable Long id) {
        borrowerLiabilitiesService.deleteAllByPersonId(id);
        return ResponseEntity.ok().build();
    }
}
