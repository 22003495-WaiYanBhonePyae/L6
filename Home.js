import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    Image,
    Button,
} from 'react-native';
import { datasource } from './Data';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    // (Same styles as before)
    opacityStyle: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
        flex: 1,
    },
    imageStyle: {
        width: 80,
        height: 120,
        resizeMode: 'contain',
    },
    headerText: {
        fontSize: 20,
        marginLeft: 10,
        fontWeight: 'bold',
        color: '#000',
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
});

const renderItem = ({ item, section }) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity
            style={styles.opacityStyle}
            onPress={() =>
                navigation.navigate('Edit', {
                    currentKey: item.key,
                    currentImage: item.image,
                    currentSection: section.title,
                })
            }
        >
            <Text style={styles.textStyle}>{item.key}</Text>
            <Image source={{ uri: item.image }} style={styles.imageStyle} />
        </TouchableOpacity>
    );
};

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={{ marginBottom: 50, margin: 10 }}>
            <Button
                title="Add Item"
                onPress={() => navigation.navigate('Add')}
            />
            <SectionList
                sections={datasource}
                renderItem={renderItem}
                renderSectionHeader={({ section: { title, bgColor, icon } }) => (
                    <View style={[styles.headerContainer, { backgroundColor: bgColor }]}>
                        <Icon name={icon} size={24} color="#000" />
                        <Text style={styles.headerText}>{title}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Home;
