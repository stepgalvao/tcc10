import React, { Component } from 'react';
import HomePage from './pages/HomePage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import NormasPage from './pages/NormasPage';
import {navigationRef} from './components/CustomNavigation'
import DisciplinaPage from './pages/DisciplinaPage';

const Stack = createStackNavigator();

export default function MainStack() {
    return(
        <NavigationContainer ref={navigationRef}>
          <Stack.Navigator 
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName = {HomePage.PAGE_NAME}>
            <Stack.Screen name={HomePage.PAGE_NAME} component={HomePage}/>
            <Stack.Screen name={NormasPage.PAGE_NAME} component={NormasPage}/>
            <Stack.Screen name={DisciplinaPage.PAGE_NAME} component={DisciplinaPage}/>
          </Stack.Navigator>
        </NavigationContainer>
      )
}

