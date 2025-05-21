package com.helloevents.helloevents.repository;

import com.helloevents.helloevents.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User , Long> {
}
