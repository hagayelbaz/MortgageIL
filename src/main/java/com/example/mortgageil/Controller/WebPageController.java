package com.example.mortgageil.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@Controller
public class WebPageController {

    @GetMapping("")
    public String home() {
        return "home";
    }

    @GetMapping("/home")
    public String home(Model model) {
        return "home";
    }

    @GetMapping("/about")
    public String about(Principal principal) {
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
        return "signIn";
    }

    @PostMapping("/signInCheck")
    public String signInCheck(@RequestParam("email") String email,
                              @RequestParam("password") String password,
                              @RequestParam(value = "firstName", required = false) String firstName,
                              @RequestParam(value = "lastName", required = false) String lastName,
                              @RequestParam(value = "phone", required = false) String phone,
                              @RequestParam(value = "savePassword", required = false) String savePassword,
                              Model model) {
        System.out.println("check login for: email =" + email + " password =" + password + " firstName = " + firstName + " lastName = " + lastName + " phone = " + phone);
        if (addToDB(email, password, firstName, lastName, phone)) {
            model.addAttribute("username", email);
            return "redirect:http://localhost:3000";
        } else {
            model.addAttribute("error", "There is un error try again ");
            return "signIn";
        }
    }

    @GetMapping("/portal")
    public String startProgram(Model model) {
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


    private boolean addToDB(String firstName, String lastName, String phone, String email, String password) {
        // add to DB
        System.out.println("Adding to database: " + ", FirstName=" + firstName + ", LastName=" + lastName + ", Phone=" + phone + ", Email=" + email);

        return true;
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




