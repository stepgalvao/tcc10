import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NormasPage from './pages/NormasPage';
import {navigationRef} from './components/CustomNavigation'
import DisciplinaPage from './pages/DisciplinaPage';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';

const Stack = createStackNavigator();

export default function MainStack() {
    return(
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName = {LoginPage.PAGE_NAME}>
            <Stack.Screen name={LoginPage.PAGE_NAME} component={LoginPage}/>
            <Stack.Screen name={CadastroPage.PAGE_NAME} component={CadastroPage}/>
            <Stack.Screen name={HomePage.PAGE_NAME} component={HomePage}/>
            <Stack.Screen name={NormasPage.PAGE_NAME} component={NormasPage}/>
            <Stack.Screen name={DisciplinaPage.PAGE_NAME} component={DisciplinaPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
}

