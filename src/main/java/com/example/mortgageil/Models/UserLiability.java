package com.example.mortgageil.Models;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.User.User;
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
public class UserLiability implements ManageableJpa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @NotEmpty(message = "amount is required")
    private double amount;

    @NotEmpty(message = "end date is required")
    private Date endDate;

    @NotEmpty(message = "description is required")
    private String description;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    @Override
    public void deleteRelatedEntities() {

    }

    @Override
    public void saveRelatedEntities() {

    }
}
