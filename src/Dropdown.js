import React, { useState } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'A3 SIZE GLOSSY LAMINATION', value: '1', id: 1 },
    { label: 'A3 SIZE MATT LAMINATION', value: '2', id: 2 },
    { label: 'A3 SIZE DRIPOFF', value: '3', id: 3 },
    { label: 'A3 SIZE MATT LAMINATION', value: '4', id: 4 },
    { label: 'A3 SIZE DRIPOFF', value: '5', id: 5 },
    { label: 'A3 SIZE MATT LAMINATION', value: '6', id: 6 },
    { label: 'A3 SIZE DRIPOFF', value: '7', id: 7 },
];

const App = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => (
        isFocus && (
            <Text style={[styles.label, { color: !isFocus ? 'black' : 'grey' }]}>
                Select product here
            </Text>
        )
    );


    const renderItem = item => {
        return (
            <View style={styles.item}>
                <Text style={styles.textItem}>{item.label}</Text>

                {item.value === value ? (
                    <Image source={{ uri: "https://w7.pngwing.com/pngs/752/449/png-transparent-at-sign-computer-icons-radio-button-miscellaneous-monochrome-black-thumbnail.png" }} style={styles.icon} />
                ) : (
                    <Image source={{ uri: "https://i.pinimg.com/736x/cd/f7/3f/cdf73f2ee218ab8705f762623d9eeb9f.jpg" }} style={styles.cicle} />
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {renderLabel()}
            <Dropdown
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={500}
                labelField="label"
                valueField="value"
                // placeholder="Select product here"
                searchPlaceholder="Search..."
                value={value}
                onFocus={() => setIsFocus(true)}
                onBlur={() => setIsFocus(false)}
                onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                }}
                renderLeftIcon={() => (
                    <Image source={{ uri: "https://rukminim2.flixcart.com/image/850/1000/kkwwu4w0/art-craft-kit/6/v/e/a4-3d-plastic-sheet-edumart-original-imagy5h4h5mghfgu.jpeg?q=90&crop=false" }} style={styles.img1} />
                )}
                renderItem={renderItem}
            />
        </View>
    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 1,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        borderRadius: 5,
        left: 135,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
        color: "grey"
    },
    dropdown: {
        margin: 16,
        height: 50,
        backgroundColor: 'white',
        // borderColor: 'orange',
        borderWidth: 1,
        borderRadius: 12,
        padding: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
    },
    img1: {
        width: 25,
        height: 28,
        resizeMode: "contain",
        marginRight: 20
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
    item: {
        padding: 17,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textItem: {
        flex: 1,
        fontSize: 16,
        color: "black"
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: "black",
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
        color: "black"

    },
});
