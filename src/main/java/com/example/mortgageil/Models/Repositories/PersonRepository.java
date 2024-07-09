package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.Person;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PersonRepository extends JpaRepository<Person, Long> {
}
