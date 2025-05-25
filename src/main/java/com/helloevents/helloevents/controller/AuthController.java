package com.helloevents.helloevents.controller;

import com.helloevents.helloevents.model.AuthRequest;
import com.helloevents.helloevents.model.AuthResponse;
import com.helloevents.helloevents.model.RegisterRequest;
import com.helloevents.helloevents.service.AuthenticationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/auth")
//@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService service;

    public AuthController(AuthenticationService service) {
        this.service = service;
    }


    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(
            @RequestBody RegisterRequest request
    ) {
        return ResponseEntity.ok(service.register(request));

    }

    @PostMapping("/authenticate")
    public ResponseEntity<AuthResponse> register(
            @RequestBody AuthRequest request
    ) {
        return ResponseEntity.ok(service.authenticate(request));
    }
}

