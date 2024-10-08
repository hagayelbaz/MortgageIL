package com.example.mortgageil.Models.User;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.*;
import com.example.mortgageil.validation.ValidationGroups;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;
import org.checkerframework.common.aliasing.qual.Unique;
import org.hibernate.Hibernate;
import org.springframework.security.core.GrantedAuthority;
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

    private final String string = "Please enter your password";
    @Email(message = "Email is required")
    @Unique
    private String email;

    //@Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{7}$", message = "Phone number is required")
    @NotEmpty(message = "Phone number is required", groups = ValidationGroups.StandardRegistration.class)
    private String phoneNumber;

    @NotEmpty(message = string, groups = ValidationGroups.StandardRegistration.class)
    private String password;

    @Enumerated(EnumType.STRING)
    private RoleName roleName;

    private boolean isFirstLogin = true;


    @JsonManagedReference
    @OneToMany(mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private Set<UserLiability> userLiabilities = new HashSet<>();


    @JsonManagedReference
    @OneToMany(mappedBy = "user",
            cascade = CascadeType.ALL,
            orphanRemoval = true)
    private Set<Borrower> borrowers = new HashSet<>();

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<MortgageGroup> mortgageGroups = new HashSet<>();

    @OneToOne(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true)
    private LoanData loanData;

    @Override
    public void deleteRelatedEntities() {
        super.deleteRelatedEntities();
        this.userLiabilities.clear();
        this.borrowers.clear();
        this.mortgageGroups.clear();
    }

    @Override
    public void saveRelatedEntities() {
        super.saveRelatedEntities();
        this.userLiabilities.forEach(userLiability -> userLiability.setUser(this));
        this.borrowers.forEach(borrower -> borrower.setUser(this));
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
        if(roleName == null) return Collections.emptyList();
        return roleName.getAuthorities();
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
