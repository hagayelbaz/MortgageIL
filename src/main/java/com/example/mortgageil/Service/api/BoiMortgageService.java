package com.example.mortgageil.Service.api;


import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.props.BanksProperties;
import com.example.mortgageil.props.BanksProperties.Bank;
import com.example.mortgageil.props.BanksProperties.Mortgage;
import com.example.mortgageil.props.BoiMortgage;
import com.example.mortgageil.utils.DataFormatConverter;
import com.example.mortgageil.utils.FluentJson;
import jakarta.annotation.Resource;
import lombok.Getter;
import lombok.Setter;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;


import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class BoiMortgageService {

    @Resource(name = "boiMortgage")
    private BoiMortgage boiMortgage;

    @Resource(name = "banksProperties")
    private BanksProperties banksProperties;

    @Resource(name = "restTemplate")
    private RestTemplate restTemplate;

    @Getter
    private List<BankData> bankDataList = new ArrayList<>();

    @Getter
    @Setter
    public static class BankData {
        private String bank;
        private int bankCode;
        private String bankColor;
        private String mortgage;
        private String value;
        private String date;
        private String code;
        private String logoUrl;
        private String preApprovedUrl;
    }


    public void refresh() {
        try {
            bankDataList.clear();
            bankDataFromProperties(bankDataList);
            String url = createFullUrl();
            String response = fetchData(url);
            var series = getSeriesFromResponse(response);
            bankDataFromJson(bankDataList, series);
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }


    public BankData getBankDataByBankCode(int bankCode) {
        return bankDataList.stream().filter(bankData -> bankData.getBankCode() == bankCode).findFirst().orElse(null);
    }

    public List<BankData> getByMortgage(String mortgageName) {
        return bankDataList.stream()
                .filter(bankData -> bankData.getMortgage().equals(mortgageName))
                .collect(Collectors.toList());
    }

    public BankData getTheBestBank() {
        var toCompare = getByMortgage("irr");
        return toCompare
                .stream()
                .min(Comparator.comparing(BankData::getValue))
                .get();
    }




    //============================= Private Methods =============================
    private FluentJson getSeriesFromResponse(String response) throws Exception {
        return DataFormatConverter.xmlToJson(response).in("DataSet").in("Series");
    }


    private String createFullUrl(){
        UrlBuilderService urlBuilderService = new UrlBuilderService().setBaseUrl(boiMortgage.getUrl());

        for (var bank : banksProperties.getBanks()) {
            for (var mortgage : banksProperties.getMortgages()) {
                var resource = addResource(bank.getFullCode(), mortgage.getSection(), mortgage.getCode());
                urlBuilderService = urlBuilderService.addResource(resource);
            }
        }

        return urlBuilderService.addParam("lastNObservations", "1").build();
    }

    private void bankDataFromJson(List<BankData> bankDataList, FluentJson json){
        bankDataList.forEach(bankData -> {
            var code = bankData.getCode();
            var node = json.find("SERIES_CODE", code);
            if (node.get() != null) {
                var value = node.in("Obs").in("OBS_VALUE").get().asText();
                var date = node.in("Obs").in("TIME_PERIOD").get().asText();
                bankData.setValue(value);
                bankData.setDate(date);
            }
        });
    }

    private void bankDataFromProperties(List<BankData> bankDataList){
        for (var bank : banksProperties.getBanks()) {
            for (var mortgage : banksProperties.getMortgages()) {
                bankDataList.add(fillBankData(bank, mortgage));
            }
        }
    }

    private String fetchData(String url) {
        return restTemplate.getForObject(url, String.class);
    }

    private BankData fillBankData(Bank bank, Mortgage mortgage){
        BankData bankData = new BankData();
        bankData.setBank(bank.getName());
        bankData.setBankCode(bank.getCode());
        bankData.setBankColor(bank.getColor());
        bankData.setLogoUrl(bank.getLogoUrl());
        bankData.setPreApprovedUrl(bank.getPreApprovedUrl());
        bankData.setMortgage(mortgage.getName());
        bankData.setCode(addResource(bank.getFullCode(), mortgage.getSection(), mortgage.getCode()));
        return bankData;
    }

    private String addResource(int bankFullCode, String section, int mortgageCode) {
        var baseCode = boiMortgage.getBaseCode();
        var finalCode = boiMortgage.getFinalCode();
        return new StringBuilder()
                .append(baseCode)
                .append("_")
                .append(bankFullCode)
                .append("_")
                .append(section)
                .append("_")
                .append(finalCode)
                .append("_")
                .append(mortgageCode)
                .toString();
    }
}

