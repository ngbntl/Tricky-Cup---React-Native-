import { View, ImageBackground, StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const ResultWin = () => {
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
        <Text style={styles.text}>YOU WIN</Text>
        <Text style={{color:'#FFFFf'}}>TAP TO RESTART</Text>

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
    color: 'green', 
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});

export default ResultWin;
