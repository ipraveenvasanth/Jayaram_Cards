// BottomModal.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';

const BottomModal = ({ isVisible, onClose }) => {
    return (
        <Modal
            isVisible={isVisible}
            animationIn="slideInUp"
            animationOut="slideOutDown"
            backdropOpacity={0.3}
        >
            <View style={styles.modalContainer}>
                <Text>This is your bottom modal content.</Text>
                <TouchableOpacity onPress={onClose} style={styles.closeButton}>
                    <Text>Close</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    closeButton: {
        marginTop: 16,
        alignItems: 'center',
    },
});

export default BottomModal;
