import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import * as RootNavigation from './RootNavigation';

const styles = StyleSheet.create({
  footer: {
    width: '100%',
    height: 80,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  button: {
    padding: 10,
    width: 90,
    textAlign: 'center',
    alignItems: 'center'
  }
});


export const Footer = () => {
  return (
    <View  style={styles.footer}>
      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('Coconut')} >
        <Text>Coconut</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('CoconutMilk')} >
        <Text>Coconut Milk</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('CoconutWater')} >
        <Text>Coconut Water</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => RootNavigation.navigate('CoconutCream')} >
        <Text>Coconut Cream</Text>
      </TouchableOpacity>
    </View>
  )
}