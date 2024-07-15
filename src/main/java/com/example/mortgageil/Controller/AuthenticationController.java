package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.auth.AuthenticationService;
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

import static com.example.mortgageil.Models.User.RoleName.ADMIN;
import static com.example.mortgageil.Models.User.RoleName.USER;

@Controller
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    //NOTE: in prod change the redirect to the react app

    @Resource(name = "authenticationService")
    private AuthenticationService authenticationService;


    @GetMapping("/login")
    public String login(Principal principal, Model model) {
        if (principal != null)
            return "redirect:http://localhost:3000/portal";
        //return "redirect:/portal/details";

        model.addAttribute("user", new User());
        return "login";
    }


    @PostMapping("/login")
    public String login(@Payload User user) {
        try {
            authenticationService.authenticate(user);
        } catch (Exception e) {
            return "redirect:/auth/login?error=" + e.getMessage();
        }
        return "redirect:/portal/details";
    }

    @PostMapping("/signUP")
    public String signUP(Principal principal, @Payload User user) {
        //if (principal != null)
        //    return "redirect:http://localhost:3000/portal";
        try {
            user.setRoleName(USER);

            User u = authenticationService.register(user);
        } catch (Exception e) {
            return "redirect:/auth/login?error=" + e.getMessage();
        }
        return "login";
    }

    @GetMapping("/signUP")
    public String signup(Principal principal, @Payload User user) {

        return "home";
    }

    @ExceptionHandler({Exception.class})
    public String handleException(Exception e) {
        return "redirect:/auth/login?error=Some Error Happened";
    }

}
