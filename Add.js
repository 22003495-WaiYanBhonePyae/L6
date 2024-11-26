import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { datasource } from './Data';
import RNPickerSelect from 'react-native-picker-select';

const Add = ({ navigation }) => {
    const [name, setName] = useState(''); // State for item name
    const [image, setImage] = useState(''); // State for image URL
    const [section, setSection] = useState('Desserts'); // State for section selection

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Item Name:</Text>
            <TextInput
                style={{ borderWidth: 1 }}
                onChangeText={(text) => setName(text)} // Update name state
                placeholder="Enter item name"
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Image URL:</Text>
                <TextInput
                    style={{ borderWidth: 1 }}
                    onChangeText={(text) => setImage(text)} // Update image state
                    placeholder="Enter image URL"
                />
            </View>
            <View style={{ padding: 10 }}>
                <RNPickerSelect
                    value={section}
                    onValueChange={(value) => setSection(value)} // Update section state
                    items={[
                        { label: 'Desserts', value: 'Desserts' },
                        { label: 'Dolls', value: 'Dolls' },
                    ]}
                />
            </View>
            <Button
                title="SUBMIT"
                onPress={() => {
                    let item = { key: name, image }; // Create item object
                    let indexNum = 1; // Default to "Dolls"
                    if (section === "Desserts") {
                        indexNum = 0; // Set to "Desserts"
                    }
                    datasource[indexNum].data.push(item); // Add item to the correct section
                    navigation.navigate('Home'); // Navigate back to Home
                }}
            />
        </View>
    );
};


const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        marginBottom: 10,
        padding: 5,
    },
});

export default Add;
