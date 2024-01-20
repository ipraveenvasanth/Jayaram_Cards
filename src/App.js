import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AllStack from './Stack/AllStack';
// import AllDrawer from './Drawer/AllDrawer';

const App = () => {
    return (
        <NavigationContainer>
            <AllStack />
            {/* <AllDrawer /> */}
        </NavigationContainer>

    )
}

export default App

const styles = StyleSheet.create({})