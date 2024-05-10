package com.lcwd.bracketbuilder.services;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class RoundRobinService {

    public void generateRoundRobin(int numTeams) {
        List<String> teams = new ArrayList<>();
        for (int i = 1; i <= numTeams; i++) {
            teams.add("Team " + i);
        }

        if (numTeams % 2 == 0) {
            generateEvenRounds(teams);
        } else {
            generateOddRounds(teams);
        }
    }

    private void generateEvenRounds(List<String> teams) {
        int round = 0;
        int size = teams.size();
        for (int i = 0; i < size - 1; i++) {
            System.out.println("Round: " + (round + 1));
            for (int j = 0; j < size / 2; j++) {
                System.out.println(teams.get(j) + " vs " + teams.get(size - 1 - j));
            }
            rotate(teams);
            round++;
        }
    }

    private void generateOddRounds(List<String> teams) {
        int round = 0;
        int size = teams.size();
        for (int i = 0; i < size; i++) {
            System.out.println("Round: " + (round + 1));
            System.out.println(teams.get(i) + " Bye");
            for (int j = 1; j < size / 2 + 1; j++) {
                int team1 = (i + j) % size;
                int team2 = (i + size - j) % size;
                System.out.println(teams.get(team1) + " vs " + teams.get(team2));
            }
            round++;
        }
    }

    private void rotate(List<String> teams) {
        String lastTeam = teams.remove(teams.size() - 1);
        teams.add(1, lastTeam);
    }
}
