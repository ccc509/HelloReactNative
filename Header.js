import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import red from './assets/red.png';

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 70,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
  

export const Header = () => {
  return (
    <View  style={styles.header}>
      <Image source={red} style={{ width: 35, height: 35}}/>
      <View>
        <Text>Welcome to my first app</Text>
      </View>
    </View>
  )
};
