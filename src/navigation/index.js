import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from    '../screens/HomeScreen';
import FirstScreen from   '../screens/FirstScreen';
import SecondScreen from  '../screens/SecondScreen';
import ThirdScreen from   '../screens/ThirdScreen';
import RandomNumbers from '../screens/RandomNumbers';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="RandomNumbers">
      <Stack.Screen name="Random"
                    component={RandomNumbers}
                    options={{title: 'Gera um número aleatório'}}
      />
      <Stack.Screen name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'FlexBox: peso, direção, alinha itens e conteúdo' }} 
      />
      <Stack.Screen name="First" 
                    component={FirstScreen} 
                    options={{ title: 'FlexBox: wrap content, mais de uma linha' }} 
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