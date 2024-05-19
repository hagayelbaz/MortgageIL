package com.example.mortgageil.Controller.API.V1.Internal;


import com.example.mortgageil.Models.Request.MortgagePlanRequest;
import com.example.mortgageil.Service.db.MortgagePlanService;
import com.example.mortgageil.Service.db.PersonService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/mortgage-plan")
public class MortgagePlanController {

    @Resource(name = "mortgagePlanService")
    private MortgagePlanService mortgagePlanService;

    @Resource(name = "personService")
    private PersonService personService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(@RequestBody MortgagePlanRequest mortgagePlanRequest) {
        Long userId = mortgagePlanRequest.getPersonId();
        mortgagePlanRequest.setPerson(personService.getById(userId));
        return ResponseEntity.ok(mortgagePlanService.create(mortgagePlanRequest));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll() {
        return ResponseEntity.ok(mortgagePlanService.getAll());
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        return ResponseEntity.ok(mortgagePlanService.getById(id));
    }

    @GetMapping("/person/{id}")
    public ResponseEntity<?> getByPersonId(@PathVariable Long id) {
        return ResponseEntity.ok(mortgagePlanService.getByPersonId(id));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody MortgagePlanRequest mortgagePlanRequest) {
        return ResponseEntity.ok(mortgagePlanService.update(id, mortgagePlanRequest));
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable Long id) {
        mortgagePlanService.deleteById(id);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/person/{id}")
    public ResponseEntity<?> deleteByPersonId(@PathVariable Long id) {
        mortgagePlanService.deleteAllByPersonId(id);
        return ResponseEntity.ok().build();
    }
    //</editor-fold>
}
