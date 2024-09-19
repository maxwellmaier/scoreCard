package org.discMax.scoreCard.controller;

import org.discMax.scoreCard.model.Round;
import org.discMax.scoreCard.service.RoundService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*") // Caution: Allows requests from any origin
@RestController
@RequestMapping("/api")
public class RoundController {

    @Autowired
    private RoundService roundService;

    @PostMapping("/rounds")
    public ResponseEntity<Round> submitRound(@RequestBody Round round) {
        Round savedRound = roundService.saveRound(round); // Now using the instance method
        return ResponseEntity.ok(savedRound);
    }

}
