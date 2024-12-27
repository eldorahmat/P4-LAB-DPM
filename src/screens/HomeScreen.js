import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Scoreboard from '../components/Scoreboard';
import TeamInfo from '../components/TeamInfo';
import { resetScores, addScore, subtractScore, checkWinner } from '../utils/scoreUtils';

const HomeScreen = () => {
  const [scoreTeamA, setScoreTeamA] = useState(0);
  const [scoreTeamB, setScoreTeamB] = useState(0);
  const [winner, setWinner] = useState(null);

  const handleReset = () => {
    resetScores(setScoreTeamA, setScoreTeamB, setWinner);
  };

  const handleAddScore = (team) => {
    if (team === 'A') {
      addScore(scoreTeamA, setScoreTeamA, setWinner, 'A');
    } else {
      addScore(scoreTeamB, setScoreTeamB, setWinner, 'B');
    }
  };

  const handleSubtractScore = (team) => {
    if (team === 'A') {
      subtractScore(scoreTeamA, setScoreTeamA);
    } else {
      subtractScore(scoreTeamB, setScoreTeamB);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Futsal Score App</Text>
      
      <TeamInfo team="Team A" />
      <Scoreboard
        score={scoreTeamA}
        onAdd={() => handleAddScore('A')}
        onSubtract={() => handleSubtractScore('A')}
      />
      
      <TeamInfo team="Team B" />
      <Scoreboard
        score={scoreTeamB}
        onAdd={() => handleAddScore('B')}
        onSubtract={() => handleSubtractScore('B')}
      />

      {winner && <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'green' }}>Winner: {winner}</Text>}
      <Button title="Reset" onPress={handleReset} />
    </View>
  );
};

export default HomeScreen;
