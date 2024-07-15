package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.api.BoiMortgageService;
import com.example.mortgageil.Service.api.BoiService;
import com.example.mortgageil.props.ApiProperties;
import com.fasterxml.jackson.databind.JsonNode;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class WebPageController {

    @Resource(name = "boiService")
    private BoiService boiService;

    @Resource(name = "boiMortgageService")
    private BoiMortgageService boiMortgageService;

    @GetMapping("")
    public String home() {
        return "home";
    }

    @GetMapping("/home")
    public String home1() {
        return "home";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/dataMarket")
    public String dataMarket(Model model) {
        Map<String, String> data = getAllInterest();
        if(data == null) {
            return "error";
        }
        model.addAttribute("interestMap", data);
        return "dataMarket";
    }

    @GetMapping("/calculator")
    public String calculator() {
        return "calculator";
    }

    @GetMapping("/sign")
    public String sign(Model model) {
        model.addAttribute("user", new User());
        return "signIn";
    }

    @GetMapping("/portal")
    public String startProgram() {
        return "login";
    }

    //NOTE: in prod this should be the react app url

    @RequestMapping(value = "/portal/**")
    public String forwardReactRoutes() {
        return "redirect:http://localhost:3000";
    }

    @GetMapping("/error")
    public String error(Model model) {
        model.addAttribute("error", "An error occurred. try again");
        return "error";
    }

    public Map<String, String> getAllInterest() {
        try {
            Map<String, String> interestMap = new HashMap<>();

            boiMortgageService.refresh();
            var irr = boiMortgageService.getByMortgage("irr");
            irr.forEach(bankData ->  { interestMap.put("ריבית ממוצעת בבנק " + bankData.getBank(), String.format("%.2f",Double.valueOf(bankData.getValue())) + "%"); });

            var cpi = boiService.getCPI();
            interestMap.put("מדד המחירים לצרכן  נכון ל:" + String.valueOf(cpi.get("date")).replace("\"", ""), String.format("%.2f", Double.valueOf(cpi.get("value").toString().replace("\"", ""))) + "%");
            interestMap.put("ריבית בנק ישראל", boiService.getCurrentInterest().get("value").toString().replace("\"", "") + "%");
            interestMap.put("ריבית פריים", (Double.parseDouble(boiService.getCurrentInterest().get("value").toString().replace("\"", "")) + 1.5) + "%");

            return interestMap;
        } catch (Exception e) {
            return null;
        }



    }

}




