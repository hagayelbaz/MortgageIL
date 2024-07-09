package com.example.mortgageil.Controller.API.V1.Internal.db;


import com.example.mortgageil.Classes.HttpResponse;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.DTO.BorrowerDTO;
import com.example.mortgageil.Models.DTO.PersonDTO;
import com.example.mortgageil.Models.Mapper.BorrowerMapper;
import com.example.mortgageil.Models.Mapper.PersonMapper;
import com.example.mortgageil.Models.Mapper.UserMapper;
import com.example.mortgageil.Models.Person;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.auth.PrincipalService;
import com.example.mortgageil.Service.db.BorrowerService;
import com.example.mortgageil.Service.db.DtoMapper;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Resource(name = "borrowerMapper")
    private BorrowerMapper mapper;

    @Resource(name = "userMapper")
    private UserMapper userMapper;

    @Resource(name = "principalService")
    private PrincipalService principalService;

    //<editor-fold desc="create">
    @PostMapping("")
    public ResponseEntity<?> create(Principal principal, @RequestBody BorrowerDTO borrowerDTO) {
        borrowerDTO.setUser(principalService.getUserDTO(principal));
        return ResponseEntity.ok(borrowerService.save(mapper.toEntity(borrowerDTO)));
    }
    //</editor-fold>

    //<editor-fold desc="get">
    @GetMapping("")
    public ResponseEntity<?> getAll(Principal principal) {
        Long userId = principalService.getUserId(principal);
        var all = borrowerService.getAllByUserId(userId);
        var dtos = all.stream().map(mapper::toDTO);
        return  ResponseEntity.ok(dtos);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> get(@PathVariable Long id) {
        var borrower = borrowerService.getById(id);
        return ResponseEntity.ok(mapper.toDTO(borrower));
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @PutMapping("/{id}")
    public ResponseEntity<?> update(Principal principal,@PathVariable Long id, @RequestBody BorrowerDTO borrowerDTO) {
        borrowerDTO.setUser(principalService.getUserDTO(principal));
        var borrowerEntity = mapper.toEntity(borrowerDTO);
        return ResponseEntity.ok(borrowerService.update(id, borrowerEntity));
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
