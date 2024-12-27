import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

const Scoreboard = () => {
  const route = useRoute();
  // Mendapatkan data karakter yang dipilih dari route params
  const { selectedCharacterA, selectedCharacterB } = route.params || {}; 

  // State untuk menyimpan skor Tim A dan Tim B
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [winner, setWinner] = useState('');

  // Fungsi untuk menambah skor Tim A
  const incrementScoreA = () => {
    if (scoreA < 10) {
      setScoreA(scoreA + 1);
    }
  };

  // Fungsi untuk mengurangi skor Tim A
  const decrementScoreA = () => {
    setScoreA(scoreA > 0 ? scoreA - 1 : 0);
  };

  // Fungsi untuk menambah skor Tim B
  const incrementScoreB = () => {
    if (scoreB < 10) {
      setScoreB(scoreB + 1);
    }
  };

  // Fungsi untuk mengurangi skor Tim B
  const decrementScoreB = () => {
    setScoreB(scoreB > 0 ? scoreB - 1 : 0);
  };

  // Fungsi untuk mereset skor
  const resetScore = () => {
    setScoreA(0);
    setScoreB(0);
  };

  // Gunakan useEffect untuk mengecek pemenang ketika skor berubah
  useEffect(() => {
    if (scoreA === 10) {
      setWinner('Tim A');
      setIsModalVisible(true);
      resetScore();  // Reset skor ketika pemenang sudah ditemukan
    } else if (scoreB === 10) {
      setWinner('Tim B');
      setIsModalVisible(true);
      resetScore();  // Reset skor ketika pemenang sudah ditemukan
    }
  }, [scoreA, scoreB]); // Menyebabkan efek hanya ketika skor berubah

  // Jika karakter belum dipilih, tampilkan pesan
  if (!selectedCharacterA || !selectedCharacterB) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Karakter belum dipilih!</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Skor Pertandingan Futsal</Text>

      <View style={styles.teamContainer}>
        <View style={styles.teamBox}>
          <Text style={styles.teamName}>Tim A</Text>
          <View style={styles.characterBox}>
            <Image source={selectedCharacterA.image} style={styles.characterImage} />
            <Text style={styles.characterName}>{selectedCharacterA.name}</Text>
          </View>
          <Text style={styles.score}>{scoreA}</Text>
          <View style={styles.scoreControls}>
            <TouchableOpacity style={styles.scoreButton} onPress={incrementScoreA}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scoreButton} onPress={decrementScoreA}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Gambar di tengah menggunakan assets */}
        <View style={styles.centerImageContainer}>
          <Image 
            source={require('../assets/vs.jpg')} // Ganti dengan path gambar lokal Anda
            style={styles.centerImage}
          />
        </View>

        <View style={styles.teamBox}>
          <Text style={styles.teamName}>Tim B</Text>
          <View style={styles.characterBox}>
            <Image source={selectedCharacterB.image} style={styles.characterImage} />
            <Text style={styles.characterName}>{selectedCharacterB.name}</Text>
          </View>
          <Text style={styles.score}>{scoreB}</Text>
          <View style={styles.scoreControls}>
            <TouchableOpacity style={styles.scoreButton} onPress={incrementScoreB}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.scoreButton} onPress={decrementScoreB}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.resetContainer}>
        <TouchableOpacity style={styles.resetButton} onPress={resetScore}>
          <Text style={styles.buttonText}>Reset Skor</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Pemenang: {winner}</Text>
            <Button title="Tutup" onPress={() => setIsModalVisible(false)} />
          </View>
        </View>
      </Modal>
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
    alignItems: 'center',
  },
  teamBox: {
    alignItems: 'center',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#ddd',
    width: '40%',
  },
  teamName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  characterBox: {
    alignItems: 'center',
    marginTop: 10,
  },
  characterImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  characterName: {
    fontSize: 16,
    fontWeight: '500',
  },
  score: {
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  scoreControls: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  scoreButton: {
    width:30,
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resetContainer: {
    marginTop: 20,
  },
  resetButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  centerImageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  centerImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
});

export default Scoreboard;
