package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.AuthenticationService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.messaging.handler.annotation.Payload;

import java.security.Principal;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    @Resource(name = "authenticationService")
    private AuthenticationService authenticationService;




    @GetMapping("/login")
    public String login(Principal principal, Model model) {
        if(principal != null)
            return "redirect:/portal/details";

        model.addAttribute("user", new User());
        return "OLDlogin";
    }


    @PostMapping("/login")
    public String login(@Payload User user) {
        try{
            authenticationService.authenticate(user);
        } catch (Exception e) {
            return "redirect:/auth/login?error=" + e.getMessage();
        }

        return "redirect:/portal/details";
    }

    @ExceptionHandler({Exception.class})
    public String handleException(Exception e){
        return "redirect:/auth/login?error=Some Error Happened";
    }

}
