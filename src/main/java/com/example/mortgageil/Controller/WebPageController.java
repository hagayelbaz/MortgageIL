package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.HashMap;
import java.util.Map;

@Controller
public class WebPageController {

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
        Map<String, String> interestMap = new HashMap<>();
        interestMap.put("ריבית פריים", "3.5%");
        interestMap.put("ריבית קבועה", "4.0%");
        interestMap.put("מדד המחירים לצרכן", "1.2%");
        interestMap.put("ריבית פריים 1", "3.5%");
        interestMap.put("ריבית קבועה 1", "4.0%");
        interestMap.put("מדד המחירים לצרכן 1", "1.2%");
        interestMap.put("ריבית פריים 2", "3.5%");
        interestMap.put("ריבית קבועה 2", "4.0%");
        interestMap.put("מדד המחירים לצרכן 2", "1.2%");
        return interestMap;
    }

}




