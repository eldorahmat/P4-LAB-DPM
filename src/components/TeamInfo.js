import React from 'react';
import { Text } from 'react-native';

const TeamInfo = ({ team }) => {
  return <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{team}</Text>;
};

export default TeamInfo;
