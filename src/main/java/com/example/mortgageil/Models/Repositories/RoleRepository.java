package com.example.mortgageil.Models.Repositories;

import com.example.mortgageil.Models.User.Role;
import com.example.mortgageil.Models.User.RoleName;
import com.example.mortgageil.Models.User.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByRoleName(RoleName roleName);
}
