package com.example.mortgageil.Models;

import com.example.mortgageil.Core.Enum.MortgagePlanType;
import com.example.mortgageil.Core.Enum.ScheduleType;
import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Models.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.NotNull;
import lombok.*;
import org.hibernate.validator.constraints.Range;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

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

    @NotNull
    @Enumerated(EnumType.STRING)
    private MortgagePlanType type;

    @NotNull
    @Enumerated(EnumType.STRING)
    private ScheduleType scheduleType;

    @Range(min = 1, message = "Amount must be greater than 0")
    private Double amount;

    @Range(min = 0, message = "Interest rate must be greater than or equal to 0")
    private Double interestRate;

    @Range(min = 1, message = "Duration must be greater than 0")
    private Integer duration;

    @Range(min = 0, message = "Balloon duration must be greater than or equal to 0")
    private Integer balloonDuration;

    private LocalDate startDate;

    @Transient
    private String typeDescription;

    @PostLoad
    @PostPersist
    @PostUpdate
    private void updateTypeDescription() {
        typeDescription = type.getType();
    }


    @ManyToOne(fetch = FetchType.LAZY)
    @JsonBackReference
    @JoinColumn(name = "mortgage_group_id", nullable = false)
    private MortgageGroup mortgageGroup;

    //TODO: is that OK?
    public MortgageGroup getMortgageGroup() {
        return MortgageGroup
                .builder()
                .createdDate(mortgageGroup.getCreatedDate())
                .lastModifiedDate(mortgageGroup.getLastModifiedDate())
                .groupName(mortgageGroup.getGroupName())
                .id(mortgageGroup.getId())
                .build();
    }


    @Override
    public void deleteRelatedEntities() {

    }

    @Override
    public void saveRelatedEntities() {

    }
}
