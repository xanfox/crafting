import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import FirstScreen from '../screens/FirstScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Bem-Vindo: -> HOME!' }} 
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

export default RootNavigation;