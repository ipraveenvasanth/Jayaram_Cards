import React, { useState } from 'react';
import { View, TextInput, Switch, Alert } from 'react-native';
import ModalSelector from 'react-native-modal-selector';

const Modal2 = () => {
    const [textInputValue, setTextInputValue] = useState('');

    let index = 0;


    const data = [
        { id: 1, key: index++, label: 'A3 SIZE GLOSSY LAMINATION', price: '₹10' },
        { id: 2, key: index++, label: 'A3 SIZE MATT LAMINATION', price: '₹8' },
        { id: 3, key: index++, label: 'A3 SIZE MATT LAMINATION', price: '₹100' },
        { id: 4, key: index++, label: 'A3 SIZE DRIPOFF', price: '₹100', accessibilityLabel: 'Tap here for cranberries' },
        { id: 5, key: index++, label: 'A3 SIZE DRIPOFF', price: '₹86' },
        { id: 6, key: index++, label: 'A3 SIZE MATT LAMINATION', price: '₹86' },
        { id: 7, key: index++, label: 'A3 SIZE DRIPOFF', price: '₹56' },
        { id: 8, key: index++, label: 'A3 SIZE DRIPO5yFF', price: '₹14' },
        { id: 9, key: index++, label: 'A3 SIZE DRIPOe5yy5FF', price: '₹16' },
        { id: 10, key: index++, label: 'A3 SIZE DRI756uyPOFF', price: '₹26' },


        // etc...
        // Can also add additional custom keys which are passed to the onChange callback

    ];

    const handleDefaultModeChange = (option) => {
        Alert.alert(`${option.label}`);
    };

    const handleWrapperChange = (option) => {
        setTextInputValue(option.label);
        Alert.alert(`${option.label}`);

    };

    return (
        <View style={{ marginHorizontal: 30, width: 350, padding: 10 }}>
            {/* Default mode */}
            {/* <ModalSelector
                data={data}
                initValue="Select something yummy!"
                onChange={handleDefaultModeChange}
            >

            </ModalSelector> */}

            {/* Wrapper */}
            <ModalSelector
                data={data}
                initValue="Select something yummy!"
                supportedOrientations={['landscape']}
                accessible={true}
                scrollViewAccessibilityLabel={'Scrollable options'}
                cancelButtonAccessibilityLabel={'Cancel Button'}
                onChange={handleWrapperChange}
            >
                <TextInput
                    style={{ borderWidth: 1, borderColor: '#ccc', padding: 10, height: 40, borderRadius: 5 }}
                    // editable={true}
                    placeholder="Select product here"
                    value={textInputValue}
                />
            </ModalSelector>

            {/* Custom component */}
            {/* <ModalSelector
                data={data}
                ref={(selector) => { this.selector = selector; }}
                customSelector={<Switch onValueChange={() => this.selector.open()} />}
            /> */}
        </View>
    );
};

export default Modal2;
