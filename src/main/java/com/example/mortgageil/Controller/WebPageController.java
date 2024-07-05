package com.example.mortgageil.Controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.security.Principal;

@Controller
public class WebPageController {


    @GetMapping("/about")
    public String about(Principal principal) {
        return "about";
    }

    @GetMapping("/contact")
    public String contact(Principal principal) {
        return "contact";
    }

    @GetMapping("")
    public String home() {
        return "home";
    }

    //NOTE: in prod this should be the react app url

    @RequestMapping(value = "/portal/**")
    public String forwardReactRoutes() {
        return "redirect:http://localhost:3000";
        //return "forward:/index.html";
    }
}
