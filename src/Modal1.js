import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import ModalInScreen from './ModalInScreen';


const Modal1 = () => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedProductName, setSelectedProductName] = useState('');

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };


    // Callback function to update selected product name in Modal1 state
    const handleSelectProduct = (productName) => {
        setSelectedProductName(productName);
    };

    useEffect(() => {
        // This effect will run after the render is committed
        if (selectedProductName) {
            console.log('Selected Product in Modal1:', selectedProductName);
        }
    }, [selectedProductName]); // Add selectedProductName as a dependency


    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleModal}>
                <View style={{ height: 40, width: 380, borderRadius: 6, borderColor: "black", borderWidth: 2, flexDirection: "row" }}>
                    <Image source={{ uri: "https://rukminim2.flixcart.com/image/850/1000/kkwwu4w0/art-craft-kit/6/v/e/a4-3d-plastic-sheet-edumart-original-imagy5h4h5mghfgu.jpeg?q=90&crop=false" }} style={styles.img1} />

                    {selectedProductName ? (
                        <Text style={{ textAlign: "center", marginLeft: 10, marginTop: 6 }}>{selectedProductName}</Text>
                    ) : (
                        <Text style={{ textAlign: "center", marginLeft: 10, marginTop: 6 }}>Select product here</Text>
                    )}

                </View>
            </TouchableOpacity>

            <Modal
                isVisible={isModalVisible}
                animationIn="slideInUp"
                animationOut="slideOutDown"
                backdropTransitionOutTiming={0}
                onBackdropPress={toggleModal}
                style={styles.modal}
            >
                <View style={styles.modalContent}>
                    <ModalInScreen onSelectProduct={handleSelectProduct} />
                </View>
            </Modal>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10,
        alignSelf: "center",
        backgroundColor: "white"
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        height: '60%',
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
    },
    img1: {
        width: 24,
        height: 22,
        resizeMode: "contain",
        marginLeft: 10,
        marginTop: 5
    },
});

export default Modal1;

