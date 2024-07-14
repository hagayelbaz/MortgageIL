package com.example.mortgageil.Models;


import com.example.mortgageil.Core.Enum.LoanType;
import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.User.User;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.SuperBuilder;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDate;
import java.util.Date;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@SuperBuilder
@Table(name = "loan_data")
public class LoanData implements ManageableJpa {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @CreationTimestamp
    private Date createdDate;

    @UpdateTimestamp
    private Date lastModifiedDate;

    private LoanType loanType;

    private double loanAmount;

    private double apartmentPrice;

    private double equity;

    private int numberOfApartments;

    private boolean intendsToSellWithin18Months;

    private boolean isFirstApartmentPurchase;

    private boolean isPerOccupantApartment;

    private double marketPrice;

    private double contractPrice;

    private double earlyRepayment;

    private LocalDate earlyRepaymentDate;

    private String city;



    @Transient
    private String typeDescription;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @PostLoad
    @PostPersist
    @PostUpdate
    private void updateTypeDescription() {
        typeDescription = loanType.getType();
    }

    @Override
    public void deleteRelatedEntities() {

    }

    @Override
    public void saveRelatedEntities() {

    }
}
