package com.example.mortgageil.Models.Converters;

import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Request.BorrowerRequest;
import jakarta.annotation.Resource;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import static com.example.mortgageil.Models.Converters.UtilConverter.convertList;

@Component
public class BorrowerRequestToEntityConverter
        implements RequestToEntityConverter<BorrowerRequest, Borrower> {

    private final BorrowerLiabilitiesRequestToEntityConverter borrowerLiabilitiesConverter;
    private final MortgagePlanRequestToEntityConverter mortgagePlanConverter;
    private final SalaryRequestToEntityConverter salaryConverter;

    @Autowired
    public BorrowerRequestToEntityConverter(
            BorrowerLiabilitiesRequestToEntityConverter borrowerLiabilitiesConverter,
            MortgagePlanRequestToEntityConverter mortgagePlanConverter,
            SalaryRequestToEntityConverter salaryConverter) {
        this.borrowerLiabilitiesConverter = borrowerLiabilitiesConverter;
        this.mortgagePlanConverter = mortgagePlanConverter;
        this.salaryConverter = salaryConverter;
    }

    @Override
    public Borrower convert(BorrowerRequest request) {
        return Borrower.builder()
                .user(request.getUser())
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .email(request.getEmail())
                .phoneNumber(request.getPhoneNumber())
                .salaries(convertList(request.getSalaries(), salaryConverter))
                .borrowerLiabilities(convertList(request.getBorrowerLiabilities(), borrowerLiabilitiesConverter))
                .mortgagePlans(convertList(request.getMortgagePlans(), mortgagePlanConverter))
                .build();
    }

    @Override
    public void applyChanges(BorrowerRequest request, Borrower entity) {
        entity.setFirstName(request.getFirstName());
        entity.setLastName(request.getLastName());
        entity.setEmail(request.getEmail());
        entity.setPhoneNumber(request.getPhoneNumber());
        entity.setUser(request.getUser());

        entity.getSalaries().clear();
        entity.getSalaries().addAll(convertList(request.getSalaries(), salaryConverter));

        entity.getBorrowerLiabilities().clear();
        entity.getBorrowerLiabilities().addAll(convertList(request.getBorrowerLiabilities(), borrowerLiabilitiesConverter));

        entity.getMortgagePlans().clear();
        entity.getMortgagePlans().addAll(convertList(request.getMortgagePlans(), mortgagePlanConverter));
    }

}
