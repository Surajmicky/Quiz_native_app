import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/Quiz';
import Result from '../screens/Result';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}} initialRouteName="Quiz">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Quiz" component={Quiz} />
        <Stack.Screen name="Result" component={Result} />
    </Stack.Navigator>
  )
}

export default Navigation

const styles = StyleSheet.create({})