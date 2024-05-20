package com.example.mortgageil.Models;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "borrower_liabilities")
public class BorrowerLiabilities implements ManageableJpa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotEmpty(message = "amount is required")
    private double amount;

    @NotEmpty(message = "end date is required")
    private Date endDate;

    @NotEmpty(message = "description is required")
    private String description;

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
