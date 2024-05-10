package com.lcwd.bracketbuilder.Controllers;

import com.lcwd.bracketbuilder.model.Round;
import com.lcwd.bracketbuilder.services.RoundRobinService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/round-robin")
public class RoundRobinController {

    private final RoundRobinService roundRobinService;

    public RoundRobinController(RoundRobinService roundRobinService) {
        this.roundRobinService = roundRobinService;
    }

    @PostMapping("/generate")
    public void generateRoundRobin(@RequestParam int numTeams) {
        roundRobinService.generateRoundRobin(numTeams);
    }
}
