package com.example.mortgageil.Models;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Contracts.ManageableJpa;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "mortgage_plans")
public class MortgagePlan implements ManageableJpa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty(message = "Mortgage plan type is required")
    private MortgagePlanType type;

    @NotEmpty(message = "Mortgage plan name is required")
    private double amount;

    @NotEmpty(message = "Interest rate is required")
    private double interestRate;

    @NotEmpty(message = "Duration is required")
    private int duration;

    private int balloonDuration;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    public Person getPerson() {
        return Person.builder()
                .id(person.getId())
                .createdDate(person.getCreatedDate())
                .lastModifiedDate(person.getLastModifiedDate())
                .firstName(person.getFirstName())
                .lastName(person.getLastName())
                .build();
    }

    @Override
    public void deleteRelatedEntities() {

    }
}
