import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


import Home from '../Home';
import Page1 from './Page1';
import Page2 from '../Page2';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const AllStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Page1" component={Page1} />
            <Stack.Screen name="Page2" component={Page2} />
        </Stack.Navigator>
    )
}

export default AllStack

const styles = StyleSheet.create({})