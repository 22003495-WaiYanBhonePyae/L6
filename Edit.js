import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { datasource } from './Data';

const Edit = ({ navigation, route }) => {
    // Extract parameters passed from the route
    const { currentKey, currentImage, currentSection, index } = route.params;

    const [name, setName] = useState(currentKey); // State for name
    const [image, setImage] = useState(currentImage); // State for image URL

    return (
        <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: 'bold' }}>Edit Item Name:</Text>
            <TextInput
                style={styles.input}
                value={name} // Set the TextInput value to the state
                onChangeText={(text) => setName(text)} // Update the state
                placeholder="Edit item name"
            />
            <Text style={{ fontWeight: 'bold' }}>Edit Image URL:</Text>
            <TextInput
                style={styles.input}
                value={image} // Set the TextInput value to the state
                onChangeText={(text) => setImage(text)} // Update the state
                placeholder="Edit image URL"
            />
            <View style={styles.buttonRow}>
                <View style={{ margin: 5 }}>
                    <Button
                        title="SAVE"
                        onPress={() => {
                            let indexNum = 1; // Default index for "Dolls"
                            if (currentSection === 'Desserts') {
                                indexNum = 0; // Update index for "Desserts"
                            }
                            // Update the specific item in the datasource
                            datasource[indexNum].data[index] = { key: name, image };
                            navigation.navigate('Home'); // Navigate back to Home
                        }}
                    />
                </View>
                <View style={{ margin: 5 }}>
                    <Button
                        title="DELETE"
                        onPress={() => {
                            let indexNum = 1; // Default index for "Dolls"
                            if (currentSection === 'Desserts') {
                                indexNum = 0; // Update index for "Desserts"
                            }
                            Alert.alert(
                                "Are you sure you want to delete?",
                                '',
                                [
                                    {
                                        text: 'Yes',
                                        onPress: () => {
                                            datasource[indexNum].data.splice(index, 1); // Remove the item
                                            navigation.navigate('Home'); // Navigate back to Home
                                        },
                                    },
                                    { text: 'No' },
                                ]
                            );
                        }}
                        color="red"
                    />
                </View>
            </View>
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
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});

export default Edit;
