package com.lcwd.bracketbuilder.services;

import com.lcwd.bracketbuilder.exceptions.UserException;
import com.lcwd.bracketbuilder.model.User;
import jdk.jshell.spi.ExecutionControl;

public interface UserService {

    //public User findUserProfileByJwt(String jwt) throws UserException;

    public User registerUser(User user) throws UserException;

    //public User findUserById(Integer id) throws ExecutionControl.UserException;

//    public User findUserByEmail(String email) throws UserException;
    //void updatePassword(User user, String newPassword);

   // void sendPasswordResetEmail(User user);
}
