package com.lcwd.bracketbuilder.dtos;

import lombok.*;

@Data
@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
public class UserDto {

    private String firstName;
    private String lastName;
    private String email;
    private Integer id;

}
