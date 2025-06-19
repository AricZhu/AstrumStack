package com.astrumstack.backend.controller;

import com.astrumstack.backend.entity.User;
import com.astrumstack.backend.mapper.UserMapper;
import com.astrumstack.backend.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class AuthController {
    @Autowired
    private UserMapper userMapper;

    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginRequest) {
        String username = loginRequest.get("username");
        String password = loginRequest.get("password");

        User user = userMapper.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            String token = jwtUtil.generateToken(username);
            Map<String, Object> response = new HashMap<>();
            response.put("token", token);
            response.put("user", user);
            return ResponseEntity.ok(response);
        }

        return ResponseEntity.badRequest().body("用户名或密码错误");
    }

    @GetMapping("/home")
    public ResponseEntity<?> home(@RequestHeader("Authorization") String token) {
        String username = jwtUtil.getUsernameFromToken(token.substring(7));
        User user = userMapper.findByUsername(username);
        if (user != null) {
            user.setPassword(null); // 不返回密码
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }
} 