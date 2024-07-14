package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.auth.AuthenticationService;
import com.example.mortgageil.Service.auth.PrincipalService;
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

//TODO: this class never used!!!
@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    //NOTE: in prod change the redirect to the react app

    @Resource(name = "authenticationService")
    private AuthenticationService authenticationService;

    @Resource(name = "principalService")
    private PrincipalService principalService;


    @GetMapping("/login")
    public String login(Principal principal, Model model) {
        if (principal != null) {
            if (principalService.getStatusAndSet(principal))
                return "redirect:http://localhost:3000/portal/details";
            return "redirect:http://localhost:3000/portal";
        }
        //return "redirect:/portal/details";

        model.addAttribute("user", new User());
        return "login";
    }


    @PostMapping("/login")
    public String login(@Payload User user, Principal principal) {
        try {
            authenticationService.authenticate(user);
        } catch (Exception e) {
            return "redirect:/auth/login?error=" + e.getMessage();
        }
        if (principalService.getStatusAndSet(principal))
            return "redirect:/portal/details";

        return "redirect:/portal";
    }

    @ExceptionHandler({Exception.class})
    public String handleException(Exception e) {
        return "redirect:/auth/login?error=Some Error Happened";
    }

}
