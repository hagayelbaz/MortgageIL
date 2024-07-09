package com.example.mortgageil.Core.contracts;

public interface ManageableJpa {
    void deleteRelatedEntities();
    void setId(Long id);
    void saveRelatedEntities();
}
