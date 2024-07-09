package com.example.mortgageil.Models;

import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Getter
@Setter
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "mortgage_groups")
public class MortgageGroup implements ManageableJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date lastModifiedDate;

    private String groupName;

    @JsonBackReference
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @JsonManagedReference
    @OneToMany(mappedBy = "mortgageGroup", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<MortgagePlan> mortgagePlans = new HashSet<>();

    @Override
    public void deleteRelatedEntities() {
        this.mortgagePlans.clear();
    }

    @Override
    public void saveRelatedEntities() {
        this.mortgagePlans.forEach(mortgagePlan -> mortgagePlan.setMortgageGroup(this));
    }
}