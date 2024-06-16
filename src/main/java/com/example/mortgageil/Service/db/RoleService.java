package com.example.mortgageil.Service.db;

import com.example.mortgageil.Core.contracts.EntityToResponseConverter;
import com.example.mortgageil.Core.contracts.RequestToEntityConverter;
import com.example.mortgageil.Models.Repositories.RoleRepository;
import com.example.mortgageil.Models.User.Role;
import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;


@Service
public class RoleService {

    @Resource(name = "roleRepository")
    private RoleRepository roleRepository;

    public Role create(Role role) {
        return roleRepository.save(role);
    }

    public Role update(Role role) {
        return roleRepository.save(role);
    }

    public void delete(Long id) {
        roleRepository.deleteById(id);
    }

    public Role findById(Long id) {
        return roleRepository.findById(id).get();
    }

    public Iterable<Role> findAll() {
        return roleRepository.findAll();
    }

}
