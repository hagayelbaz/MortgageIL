package com.example.mortgageil.Service.db;

import com.example.mortgageil.Models.Person;
import com.example.mortgageil.Models.Repositories.PersonRepository;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;

@Service
public class PersonService {

    @Resource(name = "personRepository")
    private PersonRepository personRepository;

    public Person getById(Long id) {
        return personRepository.findById(id).orElse(null);
    }
}
