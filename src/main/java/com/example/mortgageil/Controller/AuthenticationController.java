package com.example.mortgageil.Controller;

import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.UrlBuilderService;
import com.example.mortgageil.Service.auth.AuthenticationService;
import com.example.mortgageil.props.AppData;
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

    @Resource(name = "appData")
    private AppData appData;

    @Resource(name = "urlBuilderService")
    private UrlBuilderService urlBuilderService;

    @GetMapping("/login")
    public String login(Principal principal, Model model) {
        if (principal != null)
            return urlBuilderService.setBaseUrl("redirect:" + appData.getUrl())
                    .addPathSegment("portal")
                    .build();

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

    @PostMapping("/sign-up")
    public String signUP(Principal principal, @Payload User user) {
        try {
            user.setRoleName(USER);
            authenticationService.register(user);
        } catch (Exception e) {
            return "redirect:/auth/login?error=" + e.getMessage();
        }
        return "redirect:/auth/login";
    }

    @ExceptionHandler({Exception.class})
    public String handleException(Exception e) {
        return "redirect:/auth/login?error=Some Error Happened";
    }

}
