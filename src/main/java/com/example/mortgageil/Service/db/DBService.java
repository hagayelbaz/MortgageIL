package com.example.mortgageil.Service.db;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class DBService<
        T extends ManageableJpa,
        Repository extends JpaRepository<T, Long>> {
    //TODO: check about the saveRelatedEntities and deleteRelatedEntities

    protected final Repository repository;

    public DBService(Repository repository) {
        this.repository = repository;
    }

    //<editor-fold desc="create">
    public T save(T entity) {
        return Optional.of(repository.save(entity)).orElse(null);
    }
    //</editor-fold>

    //<editor-fold desc="get">

    public T getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public Iterable<T> getAll() {
        return repository.findAll();
    }

    public List<T> getAllList() {
        return new ArrayList<>(repository.findAll());
    }

    //</editor-fold>

    //<editor-fold desc="update">
    @Transactional
    public T update(Long id, T entity) {
        T existingEntity = repository.findById(id).orElse(null);
        if (existingEntity == null) {
            return null;
        }
        return repository.save(entity);
    }
    //</editor-fold>

    //<editor-fold desc="delete">
    @Transactional
    public void deleteById(Long id) {
        repository.findById(id).ifPresent(entity -> {
            entity.deleteRelatedEntities();
            repository.deleteById(id);
        });
    }
    //</editor-fold>
}
