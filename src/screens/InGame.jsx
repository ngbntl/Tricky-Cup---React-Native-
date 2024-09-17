import { View, ImageBackground, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Table from '../components/Table';

const InGame = ({ route }) => {
  const navigation = useNavigation();
  const shouldRestart = route.params && route.params.shouldRestart;

  const [ballPosition, setBallPosition] = useState(null);
  const [selectedCup, setSelectedCup] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleCupPress = (cupNumber) => {
    if (!gameOver) {
      setSelectedCup(cupNumber);
      const randomBallPosition = Math.floor(Math.random() * 3) + 1;
      setBallPosition(randomBallPosition);
      setGameOver(true);
    }
  };

  const handleRestartPress = () => {
    setBallPosition(null);
    setSelectedCup(null);
    setGameOver(false);
    navigation.setParams({ shouldRestart: false });
  };

  useEffect(() => {
    if (shouldRestart) {
      handleRestartPress();
    }
  }, [shouldRestart]);

  const handleWin = () => {
    navigation.navigate('ResultWin');
  };
  const handleLose = () => {
    navigation.navigate('ResultLose');
  };
  useEffect(() => {
    if (gameOver) {
      if (selectedCup === ballPosition) {
        handleWin();
      } else {
        handleLose();
      }
    }
  }, [gameOver, selectedCup, ballPosition]);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/background/gameBg.png')}
      >
        <Table style={styles.table} />

        <View style={styles.gameArea}>
          <TouchableOpacity onPress={() => handleCupPress(1)}>
            <Image
              style={styles.cup}
              source={require('../../assets/cup.png')}
            />
            {ballPosition === 1 && (
              <Image
                style={styles.ball}
                source={require('../../assets/ball.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCupPress(2)}>
            <Image
              style={styles.cup}
              source={require('../../assets/cup.png')}
            />
            {ballPosition === 2 && (
              <Image
                style={styles.ball}
                source={require('../../assets/ball.png')}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handleCupPress(3)}>
            <Image
              style={styles.cup}
              source={require('../../assets/cup.png')}
            />
            {ballPosition === 3 && (
              <Image
                style={styles.ball}
                source={require('../../assets/ball.png')}
              />
            )}
          </TouchableOpacity>
        </View>

       {gameOver && (
         <View style={styles.result}>
  <Text style={styles.resultText}>
    {selectedCup === ballPosition
      ? () => { setTimeout(handleWin, 3000); return null; }
      : () => { setTimeout(handleLose, 3000); return null; }}
  </Text>
</View>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    width: 80,
    height: 40,
    bottom: '33%',
  },
  cup: {
    width: 65,
    height: 95,
    marginHorizontal: 16,
    resizeMode: 'contain',
    transform: [{ rotate: '180deg' }],
  },
  ball: {
    width: 30,
    height: 30,
    position: 'absolute',
    top: 55,
    left: 30,
  },
  table: {
    position: 'absolute',
    zIndex: -1,
  },

});

export default InGame;