package com.example.librarybackend.controller;

import com.example.librarybackend.entity.User;
import com.example.librarybackend.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // allow React frontend
public class AuthController {

    private final UserRepository userRepository;

    public AuthController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/login")
    public String login(@RequestBody User loginUser) {
        User user = userRepository.findByUsername(loginUser.getUsername());
        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return "Login successful!";
        } else {
            return "Invalid username or password.";
        }
    }

    @PostMapping("/register")
    public String register(@RequestBody User newUser) {
        if (userRepository.findByUsername(newUser.getUsername()) != null) {
            return "Username already exists!";
        }
        userRepository.save(newUser);
        return "User registered successfully!";
    }
}
