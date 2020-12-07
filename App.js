import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/HomeScreen';
import FirstScreen from './src/screens/FirstScreen';
import SecondScreen from './src/screens/SecondScreen';
import ThirdScreen from './src/screens/ThirdScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" 
                      component={HomeScreen} 
                      options={{ title: 'Bem-Vindo' }} 
        />
        <Stack.Screen name="First" 
                      component={FirstScreen} 
                      options={{ title: 'Primeira Tela: em branco' }} 
        />
        
        <Stack.Screen name="Second" 
                      component={SecondScreen}
                      options={{ title: 'Tela de Perfil' }}
         />
        <Stack.Screen name="Third" 
                      component={ThirdScreen}
                      options={{title:'tela de logout e outros afins'}}
         />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


