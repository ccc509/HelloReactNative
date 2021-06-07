import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Homepage } from './Home';
import { Header } from './Header';
import { Footer } from './Footer';
import { navigationRef } from './RootNavigation';
import { CoconutCream } from './CoconutCream';
import { CoconutMilk } from './CoconutMilk';
import { CoconutWater } from './CoconutWater'; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator headerMode='screen' initialRouteName='Coconut' >
        <Stack.Screen name='Coconut' component={Homepage} options={{header: () => <Header />}} />
        <Stack.Screen name='CoconutMilk' component={CoconutMilk} options={{header: () => <Header />}} />
        <Stack.Screen name='CoconutWater' component={CoconutWater} options={{header: () => <Header />}} />
        <Stack.Screen name='CoconutCream' component={CoconutCream} options={{header: () => <Header />}} />
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
