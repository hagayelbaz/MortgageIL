package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Request.UserRequest;
import com.example.mortgageil.Models.User.User;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Component;

import java.util.Set;
import java.util.stream.Collectors;

import static com.example.mortgageil.Models.Converters.UtilConverter.convertList;


@Component
public class UserRequestToEntityConverter implements RequestToEntityConverter<UserRequest, User> {

    @Resource(name = "borrowerLiabilitiesRequestToEntityConverter")
    private BorrowerLiabilitiesRequestToEntityConverter blConverter;

    @Resource(name = "mortgagePlanRequestToEntityConverter")
    private MortgagePlanRequestToEntityConverter mpConverter;

    @Resource(name = "salaryRequestToEntityConverter")
    private SalaryRequestToEntityConverter sConverter;

    @Override
    public User convert(UserRequest request) {
        return User.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .salaries(convertList(request.getSalaries(), sConverter))
                .borrowerLiabilities(convertList(request.getBorrowerLiabilities(), blConverter))
                .mortgagePlans(convertList(request.getMortgagePlans(), mpConverter))
                .build();
    }

    @Override
    public void applyChanges(UserRequest request, User entity) {
        entity.setFirstName(request.getFirstName());
        entity.setLastName(request.getLastName());
        entity.setEmail(request.getEmail());
        entity.setPhoneNumber(request.getPhoneNumber());
        entity.setSalaries(convertList(request.getSalaries(), sConverter));
        entity.setBorrowerLiabilities(convertList(request.getBorrowerLiabilities(), blConverter));
        entity.setMortgagePlans(convertList(request.getMortgagePlans(), mpConverter));
    }

}
