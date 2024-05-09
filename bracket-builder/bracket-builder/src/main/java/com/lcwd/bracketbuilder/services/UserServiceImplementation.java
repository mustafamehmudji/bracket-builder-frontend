package com.lcwd.bracketbuilder.services;

import com.lcwd.bracketbuilder.exceptions.UserException;
import com.lcwd.bracketbuilder.model.User;
import com.lcwd.bracketbuilder.repositories.UserRepository;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


import java.util.Optional;

@Service
public class UserServiceImplementation implements UserService {

    private  UserRepository userRepository;

    private  PasswordEncoder passwordEncoder;

    public UserServiceImplementation(
            UserRepository userRepository,
            PasswordEncoder passwordEncoder){

        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    @Override
    public User registerUser(User user) throws UserException {
        System.out.println("registered user ------ ");


        Optional<User> isEmailExist;
        isEmailExist = userRepository.findByEmail(user.getEmail());

        if (isEmailExist.isPresent()) {
            throw new UserException("Email Already Exist");
        }

        String encodedPassword = passwordEncoder.encode(user.getPassword());

        User newUser=new User();

        newUser.setEmail(user.getEmail());
        newUser.setPassword(encodedPassword);
        newUser.setFirstName(user.getFirstName());
        newUser.setLastName(user.getLastName());

        return userRepository.save(newUser);
    }

}
