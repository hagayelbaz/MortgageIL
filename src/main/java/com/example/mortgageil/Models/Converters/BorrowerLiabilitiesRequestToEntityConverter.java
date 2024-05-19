package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class BorrowerLiabilitiesRequestToEntityConverter
        implements RequestToEntityConverter<BorrowerLiabilitiesRequest, BorrowerLiabilities> {

    @Resource(name = "userService")
    private UserService userService;

    @Override
    public BorrowerLiabilities convert(BorrowerLiabilitiesRequest request) {
        return BorrowerLiabilities.builder()
                .person(userService.getEntityById(request.getPersonId()))
                .amount(request.getAmount())
                .endDate(request.getEndDate())
                .build();

    }
}
