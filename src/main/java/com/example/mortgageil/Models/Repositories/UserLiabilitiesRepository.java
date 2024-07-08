package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.UserLiability;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserLiabilitiesRepository extends JpaRepository<UserLiability, Long> {

    List<UserLiability> findByUserId(Long id);

    void deleteAllByUserId(Long id);
}
