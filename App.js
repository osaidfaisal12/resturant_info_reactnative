import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Detailed from './src/screens/Detailed';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator screenOptions={{
        headerStyle: { backgroundColor: '#19547b' },
        headerTintColor: 'white',
      }}>
        <Stack.Screen  name="Home" component={Home} />
        <Stack.Screen name="Details" component={Detailed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});

export default App;
