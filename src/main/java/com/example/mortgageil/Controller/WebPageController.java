package com.example.mortgageil.Controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.HashMap;
import java.util.Map;

@Controller
public class WebPageController {

    @GetMapping("")
    public String home() {
        return "homePage";
    }

    @GetMapping("/login")
    public String login() {
        return "loginPage";
    }

    @GetMapping("/auto/login")
    public String autologin() {
        return "loginPage";
    }

    @GetMapping("/sign")
    public String sign() { return "signInPage";  }

    @GetMapping("/about")
    public String about() {
        return "aboutPage";
    }

    @GetMapping("/calculator")
    public String calculator() {
        return "calculatorPage";
    }

    @GetMapping("/dataMarket")
    public String dataMarket(Model model) {
        Map<String, String> data = getAllInterest();
        model.addAttribute("interestMap", data);
        return "dataMarketPage";
    }

    @GetMapping("/portal")
    public String portal() { return "forward:/index.html";
    }

    @RequestMapping(value = "/portal/**")
    public String forwardReactRoutes() {
        return "forward:/index.html";
    }

    @GetMapping("/error")
    public String error(Model model) {
        model.addAttribute("error", "An error occurred. try again");
        return "errorPage";
    }

    @PostMapping("/loginCheck")
    public String loginCheck(@RequestParam("userName") String username,
                             @RequestParam("password") String password,
                             @RequestParam(value = "savePassword", required = false) String savePassword,
                             Model model) {
        if (checkLogin(username, password)) {
            return "forward:/index.html";
        } else {
            model.addAttribute("error", "שם משתמש או סיסמה שגויים");
            return "loginPage";
        }
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
            return "forward:/index.html";
        } else {
            model.addAttribute("error", "בחשבון שלך לא נוצא אנא נסה שנית");
            return "signInPage";
        }
    }


    ////////////////////////////
    private boolean checkLogin(String username, String password) {
        // need to check on DB
        // and add the preferance of remember me
        System.out.println("check login for: user name =" + username);

        return true;
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


//    @GetMapping("/signWithGoogle")
//  public String signWithGoogle(Model model) { return "homePage"; }




