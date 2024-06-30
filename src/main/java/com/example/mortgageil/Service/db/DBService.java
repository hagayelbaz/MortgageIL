package com.example.mortgageil.Service.db;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Core.contracts.ManageableJpa;
import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public abstract class DBService<
        T extends ManageableJpa,
        Rq,
        Rs,
        Repository extends JpaRepository<T, Long>> {

    protected final Repository repository;
    private final RequestToEntityConverter<Rq, T> requestConverter;
    private final EntityToResponseConverter<T, Rs> responseConverter;

    public DBService(RequestToEntityConverter<Rq, T> requestConverter,
                     EntityToResponseConverter<T, Rs> responseConverter,
                     Repository repository) {

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

    public T createEntity(Rq request) {
        T entity = requestConverter.convert(request);
        return repository.save(entity);
    }

    public T createEntity(T entity) {
        return repository.save(entity);
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

    public T getEntityById(Long id) {
        return repository.findById(id).orElse(null);
    }


    public Iterable<Rs> getAll() {
        Iterable<T> entities = repository.findAll();
        return StreamSupport.stream(entities.spliterator(), false)
                .map(responseConverter::convert)
                .collect(Collectors.toList());
    }

    public Iterable<T> getAllEntities() {
        return repository.findAll();
    }
    //</editor-fold>

    //<editor-fold desc="update">
    @Transactional
    public Rs update(Long id, Rq request) {
        T existingEntity = repository.findById(id).orElse(null);
        if (existingEntity == null) {
            return null;
        }
        requestConverter.applyChanges(request, existingEntity);
        T savedEntity = repository.save(existingEntity);
        return responseConverter.convert(savedEntity);
    }


    @Transactional
    public T updateEntity(Long id, Rq request) {
        T existingEntity = repository.findById(id).orElse(null);
        if (existingEntity == null) {
            return null;
        }
        requestConverter.applyChanges(request, existingEntity);
        return repository.save(existingEntity);
    }

    public T updateEntity(Long id, T entity) {
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
