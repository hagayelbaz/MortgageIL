package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.BorrowerLiabilities;
import com.example.mortgageil.Models.Request.BorrowerLiabilitiesRequest;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

@Component
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

    @Override
    public void applyChanges(BorrowerLiabilitiesRequest request, BorrowerLiabilities entity) {
        entity.setPerson(userService.getEntityById(request.getPersonId()));
        entity.setAmount(request.getAmount());
        entity.setEndDate(request.getEndDate());
        entity.setDescription(request.getDescription());
    }
}
