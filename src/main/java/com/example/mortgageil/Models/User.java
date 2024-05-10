package com.example.mortgageil.Models;

import com.example.mortgageil.Core.Contracts.ManageableJpa;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotEmpty;


import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "users")
public class User extends Person implements ManageableJpa{

    @Email(message = "Email is required")
    private String email;

    //TODO: implement auth with password etc.

    //@Pattern(regexp = "^(\\+\\d{1,3}[- ]?)?\\d{7}$", message = "Phone number is required")
    @NotEmpty(message = "Phone number is required")
    private String phoneNumber;


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
}
