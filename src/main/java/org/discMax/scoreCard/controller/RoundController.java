package org.discMax.scoreCard.controller;

import org.discMax.scoreCard.model.Round;
import org.discMax.scoreCard.service.RoundService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000") // Allows requests from your frontend
@RestController
@RequestMapping("/api")
public class RoundController {

    @PostMapping("/rounds")
    public ResponseEntity<Round> submitRound(@RequestBody Round round) {
        Round savedRound = RoundService.saveRound(round);
        return ResponseEntity.ok(savedRound);
    }
}
