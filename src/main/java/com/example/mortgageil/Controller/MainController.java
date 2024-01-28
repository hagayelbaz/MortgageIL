package com.example.mortgageil.Controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward(HttpServletRequest request) {
        return "forward:/";
    }
}
