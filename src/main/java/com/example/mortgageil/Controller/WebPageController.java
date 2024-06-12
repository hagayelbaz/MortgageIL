package com.example.mortgageil.Controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class WebPageController {

    @GetMapping("/about")
    public String about() {
        return "about";
    }

    @GetMapping("/contact")
    public String contact() {
        return "contact";
    }

    @GetMapping("")
    public String home() {
        return "home";
    }

    @RequestMapping(value = "/portal/**")
    public String forwardReactRoutes() {
        return "forward:/index.html";
    }
}
