import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/views/pages/Home.js';
import FirstScreen from './src/views/pages/FirstScreen.js';
import NewContact from './src/views/pages/NewContact.js';

const Stack = createStackNavigator(); // Para navegar em telas diferentes

export default function App()
{
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* Primeira tela = arquivo Home */}
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        {/* Define o nome Home para o componente de mesmo nome no arquivo com o mesmo nome escondendo o header padrao  */}
        <Stack.Screen name="FirstScreen" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewContact" component={NewContact} options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  );
}