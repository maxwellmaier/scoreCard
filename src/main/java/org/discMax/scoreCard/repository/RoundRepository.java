package org.discMax.scoreCard.repository;

import org.discMax.scoreCard.model.Round;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoundRepository extends CrudRepository<Round, Long> {
}
