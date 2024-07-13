package com.example.mortgageil.Models.Mapper;


import com.example.mortgageil.Models.DTO.LoanDataDTO;
import com.example.mortgageil.Models.LoanData;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LoanDataMapper extends IMapper<LoanData, LoanDataDTO>{
    LoanDataDTO toDTO(LoanData loanData);
    LoanData toEntity(LoanDataDTO dto);
}
