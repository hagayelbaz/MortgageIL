package com.example.mortgageil.Service;

import com.example.mortgageil.Models.Converters.SalaryConverterService;
import com.example.mortgageil.Models.Converters.UserConverterService;
import com.example.mortgageil.Models.Repositories.SalaryRepository;
import com.example.mortgageil.Models.Request.SalaryRequest;
import com.example.mortgageil.Models.Response.SalaryResponse;
import com.example.mortgageil.Models.Salary;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.beans.Transient;

@Service
@RequiredArgsConstructor
public class SalaryService {

    @Resource(name = "salaryRepository")
    private SalaryRepository salaryRepository;

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "salaryConverterService")
    private SalaryConverterService salaryConverterService;

    @Resource(name = "userConverterService")
    private UserConverterService userConverterService;

    //<editor-fold desc="Create">
    public Salary createSalary(Salary salary) {
        return salaryRepository.save(salary);
    }

    public SalaryResponse createSalaryFromRequest(SalaryRequest salaryRequest) {
        return salaryConverterService.convertToResponse(
                createSalary(salaryConverterService.convertFromRequest(salaryRequest)));
    }

    @Transient
    public Salary createSalary(Long userId, Salary salary) {
        salary.setUser(userService.getUser(userId));
        return salaryRepository.save(salary);
    }

    @Transient
    public SalaryResponse createSalaryFromRequest(Long userId, SalaryRequest salaryRequest) {
        return salaryConverterService.convertToResponse(
                createSalary(userId, salaryConverterService.convertFromRequest(salaryRequest)));
    }

    //</editor-fold>

    //<editor-fold desc="Read">
    public Iterable<Salary> getSalaries() {
        return salaryRepository.findAll();
    }

    public Iterable<SalaryResponse> getSalariesResponse() {
        return salaryConverterService.convertToResponseList(getSalaries());
    }

    public Salary getSalary(Long id) {
        return salaryRepository.findById(id).orElse(null);
    }

    public SalaryResponse getSalaryResponse(Long id) {
        return salaryConverterService.convertToResponse(getSalary(id));
    }

    public Iterable<Salary> getUsersSalaries(Long userId) {
        return salaryRepository.findAllByUserId(userId);
    }

    public Iterable<SalaryResponse> getUsersSalariesResponse(Long userId) {
        return salaryConverterService.convertToResponseList(getUsersSalaries(userId));
    }

    //</editor-fold>

    //<editor-fold desc="Update">
    //TODO: Implement update methods
    //</editor-fold>

    //<editor-fold desc="Delete">
    public void deleteSalary(Long id) {
        salaryRepository.deleteById(id);
    }

    public void deleteAllSalaries(Long userId) {
        salaryRepository.deleteAllByUserId(userId);
    }

    public void deleteUserSalaries(Long userId) {
        getUsersSalaries(userId).forEach(salary -> deleteSalary(salary.getId()));
    }

    //</editor-fold>
}
