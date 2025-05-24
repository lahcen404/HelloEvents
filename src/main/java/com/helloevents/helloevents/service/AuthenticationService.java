package com.helloevents.helloevents.service;

import com.helloevents.helloevents.controller.AuthRequest;
import com.helloevents.helloevents.controller.AuthResponse;
import com.helloevents.helloevents.controller.RegisterRequest;
import com.helloevents.helloevents.model.User;
import com.helloevents.helloevents.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import com.helloevents.helloevents.model.Role;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;

@Service
// @RequiredArgsConstructor
public class AuthenticationService {

    private final UserRepository repository;

    public AuthenticationService(UserRepository repository, PasswordEncoder passwordEncoder, JwtService jwtService, AuthenticationManager manager) {
        this.repository = repository;
        this.passwordEncoder = passwordEncoder;
        this.jwtService = jwtService;
        this.manager = manager;
    }

    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager manager;

    public AuthResponse register(RegisterRequest request) {
        if (repository.findByEmail(request.getEmail()).isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Email already exists");
        }
        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPassword(passwordEncoder.encode(request.getPassword()));
        user.setRole(request.getRole() != null ? request.getRole() : Role.COSTUMER);
        repository.save(user);
        var jwtToken = jwtService.generateToken(new HashMap<>(), user);
        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);
        return response;
    }

    public AuthResponse authenticate(AuthRequest request) {
        manager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        request.getEmail(),
                        request.getPassword()
                )
        );

        var user = repository.findByEmail(request.getEmail()).orElseThrow();

        var jwtToken = jwtService.generateToken(new HashMap<>(), user);

        AuthResponse response = new AuthResponse();
        response.setToken(jwtToken);

        return response;
    }
}
