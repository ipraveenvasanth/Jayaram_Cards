import React, { useEffect } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

import Header from './Header';
import Footer from './Footer';
import Inputs from './Inputs';
import Modal1 from './Modal1';




const Home = () => {

    useEffect(() => {

        const splashScreenDuration = 1000;

        const timeoutId = setTimeout(() => {
            SplashScreen.hide();
        }, splashScreenDuration);

        return () => clearTimeout(timeoutId);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />
            </View>
            <Modal1 />

            <View style={styles.modal}>
                <Inputs />
            </View>
            <View style={styles.footer}>
                <Footer />
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.075,
        backgroundColor: "#363E8E",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10
    },
    modal: {
        flex: 0.9
    },
    footer: {
        flex: 0.2,
        backgroundColor: "#363E8E",
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 10
    },
});



