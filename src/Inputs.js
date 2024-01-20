import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';

const data = [
    { quantity: 100, price: 2500 },
    { quantity: 250, price: 2500 },
    { quantity: 500, price: 2500 },
    { quantity: 1000, price: 2500 },
    { quantity: 2500, price: 2500 },
    { quantity: 5000, price: 2500 },
    { quantity: 10000, price: 2500 },
];
const RenderItem = ({ item }) => (
    <View style={styles.item}>
        <View style={styles.rowContainer}>
            <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
            <Text style={styles.price}>₹ {item.price} (inc. tax)</Text>
        </View>
    </View>
);

const Modal = () => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: "https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" }}
                    style={styles.imageStyle}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.font}>Product Code: T100</Text>
                    <Text style={styles.font1}>Minimum order: 100</Text>
                </View>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => <RenderItem item={item} />}
                keyExtractor={item => item.quantity.toString()}
                style={styles.list}
            />
        </View>
    );
};

const styles = {

    modalContainer: {
        // styles for modal container
    },
    headerContainer: {
        height: 100,
        width: '100%',
        backgroundColor: "white",
        flexDirection: "row",
        padding: 10,
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 5,
        alignSelf: "center",
    },
    textContainer: {
        flex: 2,
        justifyContent: "center",
        marginLeft: 15,
    },
    list: {
        padding: 2,
    },
    item: {
        marginVertical: 1,
        backgroundColor: 'white',
        padding: 10,
        borderBottomWidth: 0.8,
        borderBottomColor: "black"
    },
    quantity: {
        color: "black",
        fontSize: 14,
    },
    price: {
        fontSize: 14,
        color: 'black',
        fontWeight: '500',
        marginRight: "30%"
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    font: {
        color: "black",
        fontSize: 18,
        fontWeight: "400",
    },
    font1: {
        fontSize: 16,
        color: 'black',
        fontWeight: "400",
        marginTop: 3
    }
};

export default Modal;