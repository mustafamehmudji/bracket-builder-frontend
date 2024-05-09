package com.lcwd.bracketbuilder.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Round {

    private String roundName;
    private List<String> matches;

    public void setRoundName(String s) {
    }

    public void setMatches(ArrayList<Object> objects) {
    }


}
