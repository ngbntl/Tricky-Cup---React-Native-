import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ResultLose = () => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('InGame', { shouldRestart: true });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <ImageBackground
        style={styles.imageBackground}
        source={require('../../assets/background/gameBg.png')}
      >
        <Text style={styles.text}>YOU LOSE</Text>
        <Text>TAP TO RESTART</Text>
      </ImageBackground>
    </TouchableOpacity>
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
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'red',
    textAlign: 'center',
  },
});

export default ResultLose;
