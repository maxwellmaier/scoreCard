package org.discMax.scoreCard.model;

import jakarta.persistence.*;
import java.util.List;

@Entity
public class Round {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String playerName;
    private String courseName;

    @ElementCollection
    private List<Integer> pars;

    @ElementCollection
    private List<Integer> scores;

    private int totalScore;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPlayerName() {
        return playerName;
    }

    public void setPlayerName(String playerName) {
        this.playerName = playerName;
    }

    public String getCourseName() {
        return courseName;
    }

    public void setCourseName(String courseName) {
        this.courseName = courseName;
    }

    public List<Integer> getPars() {
        return pars;
    }

    public void setPars(List<Integer> pars) {
        this.pars = pars;
    }

    public List<Integer> getScores() {
        return scores;
    }

    public void setScores(List<Integer> scores) {
        this.scores = scores;
    }

    public int getTotalScore() {
        return totalScore;
    }

    public void setTotalScore(int totalScore) {
        this.totalScore = totalScore;
    }

    public Round() {}

    public Round(String playerName, String courseName, List<Integer> pars, List<Integer> scores, int totalScore) {
        this.playerName = playerName;
        this.courseName = courseName;
        this.pars = pars;
        this.scores = scores;
        this.totalScore = totalScore;
    }

    // Getters and setters for each field
}
