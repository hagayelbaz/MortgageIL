package com.example.mortgageil.Models.User;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
public class Role implements ManageableJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private RoleName roleName;


    public Set<Permission> getPermissions() {
        return roleName.getPermissions();
    }

    public List<SimpleGrantedAuthority> getAuthorities() {
        return roleName.getAuthorities();
    }

    @Override
    public void deleteRelatedEntities(){

    }
}
