package com.example.mortgageil.Models;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "salaries")
public class Salary implements ManageableJpa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date lastModifiedDate;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "person_id", nullable = false)
    private Person person;

    private double salary;

    private String employer;

    private Date startDate;

    private String jobTitle;


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
