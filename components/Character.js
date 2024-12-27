import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Character = () => {
  const [selectedCharacterA, setSelectedCharacterA] = useState(null);
  const [selectedCharacterB, setSelectedCharacterB] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentTeam, setCurrentTeam] = useState(null); // Track which team is selecting
  const navigation = useNavigation();

  const characters = [
    { name: 'Pemain 1', image: require('../assets/venom.webp') },
    { name: 'Pemain 2', image: require('../assets/venom.webp') },
    { name: 'Pemain 3', image: require('../assets/venom.webp') },
    { name: 'Pemain 4', image: require('../assets/venom.webp') },
    { name: 'Pemain 5', image: require('../assets/venom.webp') },
    { name: 'Pemain 6', image: require('../assets/venom.webp') },
  ];

  const handleSelectCharacter = (character) => {
    if (currentTeam === 'A') {
      setSelectedCharacterA(character);
    } else if (currentTeam === 'B') {
      setSelectedCharacterB(character);
    }
    setIsModalVisible(false);
  };

  const handleTeamSelection = (team) => {
    setCurrentTeam(team);
    setIsModalVisible(true);
  };

const handleDoneSelection = () => {
  if (selectedCharacterA && selectedCharacterB) {
    navigation.navigate('Scoreboard', {
      selectedCharacterA,
      selectedCharacterB,
    });
  } else {
    alert('Harap pilih karakter untuk kedua tim!');
  }
};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Pemain untuk Tim A dan Tim B</Text>

      <View style={styles.teamSelection}>
        <TouchableOpacity
          style={styles.teamBox}
          onPress={() => handleTeamSelection('A')}
        >
          <Text style={styles.teamName}>Tim A</Text>
          {selectedCharacterA && (
            <Image source={selectedCharacterA.image} style={styles.characterImage} />
          )}
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.teamBox}
          onPress={() => handleTeamSelection('B')}
        >
          <Text style={styles.teamName}>Tim B</Text>
          {selectedCharacterB && (
            <Image source={selectedCharacterB.image} style={styles.characterImage} />
          )}
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.doneButton}
        onPress={handleDoneSelection}
        disabled={!selectedCharacterA || !selectedCharacterB}
      >
        <Text style={styles.buttonText}>Selesai</Text>
      </TouchableOpacity>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Pilih Pemain</Text>
            <View style={styles.characterGrid}>
              {characters.map((character, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.characterBox}
                  onPress={() => handleSelectCharacter(character)}
                >
                  <Image source={character.image} style={styles.characterImage} />
                  <Text style={styles.characterName}>{character.name}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  teamSelection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  teamBox: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    width: '45%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginTop: 10,
  },
  doneButton: {
    marginTop: 20,
    backgroundColor: '#001f54',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  characterGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  characterBox: {
    alignItems: 'center',
    marginBottom: 10,
    width: '30%',
  },
  characterName: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 5,
  },
});

export default Character;
