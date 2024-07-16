package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Classes.HttpResponse;
import com.example.mortgageil.Models.DTO.LoanDataDTO;
import com.example.mortgageil.Models.Mapper.LoanDataMapper;
import com.example.mortgageil.Service.auth.PrincipalService;
import com.example.mortgageil.Service.db.LoanDataService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;

@RestController
@RequestMapping("/api/v1/loan-data")
public class LoanDataController {

    @Resource(name = "loanDataService")
    private LoanDataService loanDataService;

    @Resource(name = "loanDataMapper")
    private LoanDataMapper mapper;

    @Resource(name = "principalService")
    private PrincipalService principalService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody LoanDataDTO loanDataDTO) {
        loanDataDTO.setUser(principalService.getUserDTO(principal));
        return ResponseEntity.ok(loanDataService.save(mapper.toEntity(loanDataDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> get(Principal principal) {
        var loanData = loanDataService.getByUserId(principalService.getUserId(principal));
        return ResponseEntity.ok(mapper.toDTO(loanData));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("")
    public ResponseEntity<?> update(Principal principal, @RequestBody LoanDataDTO loanDataDTO) {
        loanDataDTO.setUser(principalService.getUserDTO(principal));
        loanDataService.save(mapper.toEntity(loanDataDTO));
        return ResponseEntity.ok(HttpResponse
                .builder()
                .status(200)
                .message("Loan data updated")
                .build());
    }
    //</editor-fold>
}
