package com.example.mortgageil.Service;

import com.example.mortgageil.Core.Contracts.ManageableJpa;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract class DBService<T extends ManageableJpa> {
    private final JpaRepository<T, Long> repository;


    public DBService(JpaRepository<T, Long> repository) {
        this.repository = repository;
    }

    public T save(T entity) {
        return repository.save(entity);
    }

    public T getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Iterable<T> getAll() {
        return repository.findAll();
    }

    @Transactional
    public void deleteById(Long id) {
        T entity = getById(id);
        if (entity == null) {
            return;
        }
        entity.deleteRelatedEntities();
        repository.deleteById(id);
    }
}
