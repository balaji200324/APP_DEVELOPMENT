//
//package com.Logistics_management.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.security.access.prepost.PreAuthorize;
//import java.util.List;
//import com.Logistics_management.models.User;
//import com.Logistics_management.models.ERole;
//import com.Logistics_management.repository.UserRepository;
//
//@CrossOrigin(origins = "http://localhost:3000")
//@RestController
//@RequestMapping("/api/employees")
//public class EmployeeController {
//    @Autowired
//    private UserRepository userRepository;
//
//    @GetMapping("/list")
//    @PreAuthorize("hasRole('ADMIN')")
//    public List<User> listEmployees() {
//        List<User> employees = userRepository.findByRolesName(ERole.ROLE_EMPLOYEE);
//        return employees;
//    }
//}
