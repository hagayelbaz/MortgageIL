package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Models.DTO.MortgagePlanDTO;
import com.example.mortgageil.Models.Mapper.MortgageGroupMapper;
import com.example.mortgageil.Models.Mapper.MortgagePlanMapper;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Service.auth.PrincipalService;
import com.example.mortgageil.Service.db.DtoMapper;
import com.example.mortgageil.Service.db.MortgageGroupService;
import com.example.mortgageil.Service.db.MortgagePlanService;
import com.example.mortgageil.Service.db.PersonService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/mortgage-plan")
public class MortgagePlanController {

    @Resource(name = "mortgagePlanService")
    private MortgagePlanService mortgagePlanService;

    @Resource(name = "mortgageGroupService")
    private MortgageGroupService mortgageGroupService;

    @Resource(name = "mortgagePlanMapper")
    private MortgagePlanMapper mapper;

    @Resource(name = "principalService")
    private PrincipalService principalService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody MortgagePlanDTO mortgagePlanDTO) {
        //TODO: check if user exists
        var mortgagePlan = mapper.toEntity(mortgagePlanDTO);
        mortgagePlan.setMortgageGroup(mortgageGroupService.getById(mortgagePlanDTO.getMortgageGroupId()));
        //mortgagePlan.setUser(principalService.getUser(principal));
        return ResponseEntity.ok(mortgagePlanService.save(mortgagePlan));
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
        //return ResponseEntity.ok(mortgagePlanService.getByPersonId(id));
        return ResponseEntity.ok().build();
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(@PathVariable Long id, @RequestBody MortgagePlanDTO mortgagePlanDTO) {
        return ResponseEntity.ok(mortgagePlanService.update(id, mapper.toEntity(mortgagePlanDTO)));
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
