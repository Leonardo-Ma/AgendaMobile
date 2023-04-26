import React from 'react';
import { StatusBar, View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home()
{
    const navigation = useNavigation(); // Para mudar de página

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={{ fontSize: 40, color: 'white' }}>
                    Nunca mais{'\n'} esqueça!
                </Text>
                <AntDesign name="book" size={230} color="black" />
            </View>
            <TouchableWithoutFeedback onPress={() => navigation.navigate('FirstScreen')}>
                <Text style={{ fontSize: 50, color: 'black', alignSelf: 'flex-end', paddingEnd: 50, paddingBottom: 30 }}>&gt;</Text>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00eae9',
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingVertical: 20,
    },
});
