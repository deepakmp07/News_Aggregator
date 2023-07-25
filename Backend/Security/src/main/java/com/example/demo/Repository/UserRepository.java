package com.example.demo.Repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.Entity.UserDetails;

public interface UserRepository extends JpaRepository<UserDetails,Long> {

  
}

