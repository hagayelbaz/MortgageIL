package com.example.mortgageil.Service;

import com.example.mortgageil.Core.Contracts.EntityToResponseConverter;
import com.example.mortgageil.Core.Contracts.ManageableJpa;
import com.example.mortgageil.Core.Contracts.RequestToEntityConverter;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class DBService<T extends ManageableJpa, Rq, Rs> {
    private final JpaRepository<T, Long> repository;
    private final RequestToEntityConverter<Rq, T> requestConverter;
    private final EntityToResponseConverter<T, Rs> responseConverter;

    public DBService(JpaRepository<T, Long> repository,
                     RequestToEntityConverter<Rq, T> requestConverter,
                     EntityToResponseConverter<T, Rs> responseConverter) {
        this.repository = repository;
        this.requestConverter = requestConverter;
        this.responseConverter = responseConverter;
    }

    //<editor-fold desc="create">
    public Rs create(Rq request) {
        T entity = requestConverter.convert(request);
        T savedEntity = repository.save(entity);
        return responseConverter.convert(savedEntity);
    }
    //</editor-fold>

    //<editor-fold desc="get">
    public Rs getById(Long id) {
        T entity = repository.findById(id).orElse(null);
        if (entity != null) {
            return responseConverter.convert(entity);
        }
        return null;
    }

    public Iterable<Rs> getAll() {
        Iterable<T> entities = repository.findAll();
        return StreamSupport.stream(entities.spliterator(), false)
                .map(responseConverter::convert)
                .collect(Collectors.toList());
    }
    //</editor-fold>

    //<editor-fold desc="update">
    public Rs update(Long id, Rq request) {
        T entity = repository.findById(id).orElse(null);
        if (entity != null) {
            T savedEntity = repository.save(entity);
            return responseConverter.convert(savedEntity);
        }
        return null;
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
