import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Contoh data karakter yang bisa dipilih
const characters = [
  { id: 1, name: 'Cyclops', image: require('../assets/cy.jpg') },
  { id: 2, name: 'Dr Strange', image: require('../assets/dr.jpg') },
  { id: 3, name: 'Sally', image: require('../assets/sal.png') },
  { id: 4, name: 'Rummenigge', image: require('../assets/rum.jpg') },
];

const CharacterSelection = () => {
  const navigation = useNavigation();

  // State untuk menyimpan karakter yang dipilih untuk Tim A dan Tim B
  const [selectedCharacterA, setSelectedCharacterA] = useState(null);
  const [selectedCharacterB, setSelectedCharacterB] = useState(null);

  // Fungsi untuk memilih karakter
  const selectCharacter = (team, character) => {
    if (team === 'A') {
      setSelectedCharacterA(character);
    } else if (team === 'B') {
      setSelectedCharacterB(character);
    }
  };

  // Fungsi untuk melanjutkan ke halaman scoreboard
  const goToScoreboard = () => {
    if (selectedCharacterA && selectedCharacterB) {
      navigation.navigate('Scoreboard', { selectedCharacterA, selectedCharacterB });
    } else {
      alert('Pilih karakter untuk kedua tim!');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pilih Karakter</Text>

      <View style={styles.teamContainer}>
        <View style={styles.teamBox}>
          <Text style={styles.teamName}>Tim A</Text>
          <View style={styles.characterList}>
            {characters.map((character) => (
              <TouchableOpacity
                key={character.id}
                style={[
                  styles.characterCard,
                  selectedCharacterA?.id === character.id && styles.selectedCard,
                ]}
                onPress={() => selectCharacter('A', character)}
              >
                <Image source={character.image} style={styles.characterImage} />
                <Text style={styles.characterName}>{character.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.teamBox}>
          <Text style={styles.teamName}>Tim B</Text>
          <View style={styles.characterList}>
            {characters.map((character) => (
              <TouchableOpacity
                key={character.id}
                style={[
                  styles.characterCard,
                  selectedCharacterB?.id === character.id && styles.selectedCard,
                ]}
                onPress={() => selectCharacter('B', character)}
              >
                <Image source={character.image} style={styles.characterImage} />
                <Text style={styles.characterName}>{character.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.nextButton} onPress={goToScoreboard}>
        <Text style={styles.nextButtonText}>Lanjut ke Scoreboard</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  teamBox: {
    width: '45%',
    alignItems: 'center',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterList: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  characterCard: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    marginBottom: 10,
    alignItems: 'center',
    width: 120,
    backgroundColor: '#f4f4f4',
  },
  selectedCard: {
    backgroundColor: '#d3e7ff',
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 5,
  },
  characterName: {
    fontSize: 14,
    fontWeight: '500',
  },
  nextButton: {
    marginTop: 20,
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 10,
  },
  nextButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CharacterSelection;
