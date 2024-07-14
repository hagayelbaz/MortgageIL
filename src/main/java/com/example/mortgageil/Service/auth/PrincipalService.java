package com.example.mortgageil.Service.auth;


import com.example.mortgageil.Models.DTO.UserDTO;
import com.example.mortgageil.Models.Mapper.UserMapper;
import com.example.mortgageil.Models.User.RoleName;
import com.example.mortgageil.Models.User.User;
import com.example.mortgageil.Service.db.UserService;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

import java.security.Principal;

@Service
public class PrincipalService {

    @Resource(name = "userService")
    private UserService userService;

    @Resource(name = "userMapper")
    private UserMapper userMapper;

    public User getUser(Principal principal) {
        return userService.findByEmail(principal.getName());
    }

    public UserDTO getUserDTO(Principal principal) {
        return userMapper.toDTO(getUser(principal));
    }

    public Long getUserId(Principal principal) {
        return getUser(principal).getId();
    }

    public String getEmail(Principal principal) {
        return principal.getName();
    }

    public boolean isAdmin(Principal principal) {
        return getUser(principal).getRoleName() == RoleName.ADMIN;
    }

    public boolean isUser(Principal principal) {
        return getUser(principal).getRoleName() == RoleName.USER;
    }

    public void setLoginStatus(Principal principal) {
        var user = getUser(principal);
        user.setFirstLogin(false);
        userService.save(user);
    }

    public boolean getStatusAndSet(Principal principal) {
        var user = getUser(principal);
        var status = user.isFirstLogin();
        user.setFirstLogin(false);
        userService.save(user);
        return status;
    }
}
