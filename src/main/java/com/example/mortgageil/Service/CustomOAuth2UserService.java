package com.example.mortgageil.Service;

import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.OAuth2Error;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Primary
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Resource(name = "userService")
    private UserService userService;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String email = oAuth2User.getAttribute("email");

        // Check if email exists in your database
        if (!userService.isUserExistByEmail(email)) {
            throw new OAuth2AuthenticationException(new OAuth2Error("invalid_token",
                    "User not registered in our system", ""));
        }

        List<GrantedAuthority> authorities = new ArrayList<>(oAuth2User.getAuthorities());
        authorities.add(new SimpleGrantedAuthority("ROLE_USER"));
        authorities.add(new SimpleGrantedAuthority("ROLE_GOOGLE_USER"));

        return new DefaultOAuth2User(authorities, oAuth2User.getAttributes(), "sub");
    }
}