package com.example.mortgageil.Models.User;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.Borrower;
import com.example.mortgageil.Models.Person;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.hibernate.Hibernate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.*;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "users")
public class User extends Person implements ManageableJpa, UserDetails {

    @Email(message = "Email is required")
    private String email;

    //@Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{7}$", message = "Phone number is required")
    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;

    @NotEmpty(message = "Please enter your password")
    private String password;

    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;


    @JsonManagedReference
    @OneToMany(mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private Set<Borrower> borrowers = new HashSet<>();


    @Override
    public void deleteRelatedEntities() {
        super.deleteRelatedEntities();
        this.borrowers.clear();
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || Hibernate.getClass(this) != Hibernate.getClass(o)) return false;
        User user = (User) o;
        return getId() != null && Objects.equals(getId(), user.getId());
    }


    @Override
    public int hashCode() {
        return getClass().hashCode();
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role == Role.ADMIN ? "ROLE_ADMIN" : "ROLE_USER"));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
