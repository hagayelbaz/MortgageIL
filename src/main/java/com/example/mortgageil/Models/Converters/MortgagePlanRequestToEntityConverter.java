package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.MortgagePlan;
import com.example.mortgageil.Models.Request.MortgagePlanRequest;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;


@Service
public class MortgagePlanRequestToEntityConverter
        implements RequestToEntityConverter<MortgagePlanRequest, MortgagePlan> {

    @Resource(name = "userService")
    private UserService userService;

    @Override
    public MortgagePlan convert(MortgagePlanRequest request) {
        return MortgagePlan.builder()
                .person(userService.getEntityById(request.getPersonId()))
                .type(request.getType())
                .amount(request.getAmount())
                .interestRate(request.getInterestRate())
                .duration(request.getDuration())
                .balloonDuration(request.getBalloonDuration())
                .build();

    }
}
