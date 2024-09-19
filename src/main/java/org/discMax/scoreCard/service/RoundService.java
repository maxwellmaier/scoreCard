package org.discMax.scoreCard.service;

import org.discMax.scoreCard.model.Round;
import org.discMax.scoreCard.repository.RoundRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoundService {

    @Autowired
    private RoundRepository roundRepository;

    public Round saveRound(Round round) {
        return roundRepository.save(round);
    }
}

