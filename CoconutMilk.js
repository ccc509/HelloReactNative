import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export const CoconutMilk = () => {
  return (
    <View  style={styles.container}>
      <Text>Coconut milk is nice with coffee</Text>
    </View>
  )
}