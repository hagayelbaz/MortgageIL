package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Models.DTO.MortgageGroupDTO;
import com.example.mortgageil.Models.DTO.MortgagePlanDTO;
import com.example.mortgageil.Models.Mapper.MortgageGroupMapper;
import com.example.mortgageil.Service.auth.PrincipalService;
import com.example.mortgageil.Service.db.MortgageGroupService;
import jakarta.annotation.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/v1/mortgage-group")
public class MortgageGroupController {

    @Resource(name = "mortgageGroupService")
    private MortgageGroupService mortgageGroupService;

    @Resource(name = "mortgageGroupMapper")
    private MortgageGroupMapper mortgageGroupMapper;

    @Resource(name = "principalService")
    private PrincipalService principalService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody MortgageGroupDTO mortgageGroupDTO) {
        mortgageGroupDTO.setUser(principalService.getUserDTO(principal));
        return ResponseEntity.ok(mortgageGroupService.save(mortgageGroupMapper.toEntity(mortgageGroupDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll(Principal principal) {
        Long userId = principalService.getUserId(principal);
        var all = mortgageGroupService.getAllByUserId(userId);
        var dtos = all.stream().map(mortgageGroupMapper::toDTO);
        return  ResponseEntity.ok(dtos);
    }

}
