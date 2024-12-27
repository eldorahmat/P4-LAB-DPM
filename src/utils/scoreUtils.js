export const resetScores = (setScoreTeamA, setScoreTeamB, setWinner) => {
    setScoreTeamA(0);
    setScoreTeamB(0);
    setWinner(null);
  };
  
  export const addScore = (score, setScore, setWinner, team) => {
    const newScore = score + 1;
    setScore(newScore);
  
    if (newScore >= 10) {
      setWinner(`Team ${team}`);
    }
  };
  
  export const subtractScore = (score, setScore) => {
    const newScore = score > 0 ? score - 1 : 0;
    setScore(newScore);
  };
  