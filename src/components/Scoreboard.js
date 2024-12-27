import React from 'react';
import { View, Text, Button } from 'react-native';

const Scoreboard = ({ score, onAdd, onSubtract }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Button title="-" onPress={onSubtract} />
      <Text style={{ fontSize: 24, marginHorizontal: 20 }}>{score}</Text>
      <Button title="+" onPress={onAdd} />
    </View>
  );
};

export default Scoreboard;
