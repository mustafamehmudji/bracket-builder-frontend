package com.lcwd.bracketbuilder.dtos.mapper;

import com.lcwd.bracketbuilder.dtos.UserDto;
import com.lcwd.bracketbuilder.model.User;

import java.util.ArrayList;
import java.util.List;

public class UsreDtoMapper {



    public static UserDto userDTO(User user) {
        UserDto userDto=new UserDto();
        userDto.setId(user.getId());
        userDto.setFirstName(user.getFirstName());
        userDto.setLastName(user.getLastName());


        return userDto;
    }

    public static List<UserDto> userDTOS(List<User> list){
        List<UserDto> userDtos = new ArrayList<>();

        for(User user : list) {
            UserDto userDto= userDTO(user);
            userDtos.add(userDto);
        }
        return userDtos;
    }
}
