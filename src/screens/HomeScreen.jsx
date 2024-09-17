import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import React from 'react';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate('InGame')}
      >
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/background/homeBackground.jpg')}
        >
          <View style={styles.titleContainer}>
            <Text style={styles.name}>TRICKY CUPS</Text>
          </View>
          <Text style={styles.playText}>TAP TO PLAY</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  touchable: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    backgroundColor: '#D84861',
    opacity: 0.9,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000000',
    transform: [{ skewX: '20deg' }],
  },
  name: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
    fontFamily:'Sixtyfour'
    
  },
  playText: {
    fontSize: 20,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 10,
    
  },
});

export default HomeScreen;
