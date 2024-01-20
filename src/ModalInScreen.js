
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, FlatList, Alert, StyleSheet, Image } from 'react-native';

const products = [
    { id: 1, name: 'A3 SIZE GLOSSY LAMINATION', price: '₹10' },
    { id: 2, name: 'A3 SIZE MATT LAMINATION', price: '₹8' },
    { id: 3, name: 'A3 SIZE DRIPOFF', price: '₹6' },
    { id: 4, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 5, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 6, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 7, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 8, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 9, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 10, name: 'A3 SIZE DRIPOFF', price: '₹100' },

    { id: 11, name: 'A3 SIZE GLOSSY LAMINATION', price: '₹10' },
    { id: 12, name: 'A3 SIZE MATT LAMINATION', price: '₹8' },
    { id: 13, name: 'A3 SIZE DRIPOFF', price: '₹6' },
    { id: 14, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 15, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 16, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 17, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 18, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 19, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 20, name: 'A3 SIZE DRIPOFF', price: '₹100' },

    { id: 21, name: 'A3 SIZE GLOSSY LAMINATION', price: '₹10' },
    { id: 22, name: 'A3 SIZE MATT LAMINATION', price: '₹8' },
    { id: 23, name: 'A3 SIZE DRIPOFF', price: '₹6' },
    { id: 24, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 25, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 26, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 27, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 28, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 29, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 30, name: 'A3 SIZE DRIPOFF', price: '₹100' },

    { id: 31, name: 'A3 SIZE GLOSSY LAMINATION', price: '₹10' },
    { id: 32, name: 'A3 SIZE MATT LAMINATION', price: '₹8' },
    { id: 33, name: 'A3 SIZE DRIPOFF', price: '₹6' },
    { id: 34, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 35, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 36, name: 'A3 SIZE MATT LAMINATION', price: '₹100' },
    { id: 37, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 38, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 39, name: 'A3 SIZE DRIPOFF', price: '₹100' },
    { id: 40, name: 'A3 SIZE DRIPOFF', price: '₹100' },

];

const ModalInScreen = ({ onSelectProduct }) => {
    const [text, setText] = useState('');
    const [selectedProduct, setSelectedProduct] = useState(null);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity style={[styles.item, { backgroundColor: selectedProduct === item.id ? 'lightblue' : 'white' }]}
                onPress={() => setSelectedProduct(item.id)}>
                {selectedProduct === item.id ? (
                    <Image source={{ uri: "https://w7.pngwing.com/pngs/752/449/png-transparent-at-sign-computer-icons-radio-button-miscellaneous-monochrome-black-thumbnail.png" }} style={styles.icon} />
                ) : (
                    <Image source={{ uri: "https://i.pinimg.com/736x/cd/f7/3f/cdf73f2ee218ab8705f762623d9eeb9f.jpg" }} style={styles.cicle} />
                )}
                <Text style={styles.textItem}>{item.name}</Text>
            </TouchableOpacity>
        );
    }

    const keyExtractor = (item) => item.id.toString();

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(text.toLowerCase())
    );

    const handleSearch = () => {
        if (filteredProducts.length === 0) {
            Alert.alert('No Data Found', 'Please refine your search criteria.');
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <TextInput
                value={text}
                onChangeText={setText}
                placeholder="Search product here"
                style={{
                    borderWidth: 1,
                    borderColor: 'gray',
                    padding: 10,
                    marginBottom: 10
                }}
                onSubmitEditing={handleSearch}
            />
            <FlatList
                data={filteredProducts}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                style={{ height: 300 }} // Set the height you desire
                // showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}

            />
            {selectedProduct && (
                <Text>You selected: {products.find((p) => p.id === selectedProduct).name}</Text>
            )}
            {/* Call the onSelectProduct callback with the selected product name */}
            {selectedProduct && onSelectProduct && onSelectProduct(products.find((p) => p.id === selectedProduct).name)}
        </View>
    );
};

export default ModalInScreen;

const styles = StyleSheet.create({
    item: {
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: "black",
        marginLeft: 20
    },
    icon: {
        width: 18,
        height: 18,
        resizeMode: "contain",
    },
    cicle: {
        width: 25,
        height: 18,
        resizeMode: "cover",
    },
});