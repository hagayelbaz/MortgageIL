package com.example.mortgageil.Service;

import com.example.mortgageil.Models.User.Role;
import com.example.mortgageil.Models.User.RoleName;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.db.RoleService;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import jakarta.transaction.Transactional;
import org.springframework.context.annotation.Primary;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.DefaultOAuth2User;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
@Primary
public class CustomOAuth2UserService extends DefaultOAuth2UserService {

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "roleService")
    private RoleService roleService;

    @Override
    @Transactional
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2User oAuth2User = super.loadUser(userRequest);
        String email = oAuth2User.getAttribute("email");

        User user = userService.findByEmail(email).orElseGet(() -> {
            User newUser = new User();
            newUser.setEmail(email);
            newUser.setFirstName(oAuth2User.getAttribute("given_name"));
            newUser.setLastName(oAuth2User.getAttribute("family_name"));

            Role defaultRole = userService.getDefaultRole(); // Ensure this method either fetches the existing role or logs a critical error if not found.
            newUser.setRoles(Set.of(defaultRole));

            return userService.createEntity(newUser);
        });

        List<GrantedAuthority> authorities = user.getRoles().stream()
                .flatMap(role -> role.getAuthorities().stream())
                .collect(Collectors.toList());

        return new DefaultOAuth2User(authorities, oAuth2User.getAttributes(), "sub");
    }


}