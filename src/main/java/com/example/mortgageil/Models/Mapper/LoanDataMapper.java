package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.LoanDataDTO;
import com.example.mortgageil.Models.LoanData;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring", uses = {UserMapper.class})
public interface LoanDataMapper extends IMapper<LoanData, LoanDataDTO>{
    @Mapping(target = "userId", source = "user.id")
    @Mapping(target = "user", ignore = true)
    LoanDataDTO toDTO(LoanData loanData);

    LoanData toEntity(LoanDataDTO dto);
}
