import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './FirstScreen.style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function FirstScreen({ navigation })
{
    async function removeContact(key) // Remover o contato pela chave passada
    {
        try
        {
            await AsyncStorage.removeItem(key); // Remove
            const updatedContacts = await getAllKeys();
            setContacts(updatedContacts); // Atualiza lista
        } catch (e) { console.log(e); }
    }

    // Receber todos os dados da AsyncStorage e retornar array
    const getAllKeys = async () =>
    {
        let keys = [];
        try
        {
            keys = await AsyncStorage.getAllKeys();
        } catch (e) { console.log(e); }
        const contacts = {};
        for (let i = 0; i < keys.length; i++) 
        {
            if (keys[i].startsWith("@"))
            {
                const value = await AsyncStorage.getItem(keys[i]);
                const contactData = JSON.parse(value);
                const { firstName, lastName, phones, emails, addresses } = contactData;
                // Cria objeto utilizando os dados da AsyncStorage
                contacts[`${firstName} ${lastName}`] = {
                    key: keys[i],
                    firstName,
                    lastName,
                    phones,
                    emails,
                    addresses,
                };
            }
        }
        return Object.values(contacts);
    };
    const [contacts, setContacts] = useState([]);

    // Quando o usuario realizar alteracoes e retornar para essa tela ela atualiza a lista
    useEffect(() =>
    {
        const reloadContacts = async () =>
        {
            const updatedContacts = await getAllKeys();
            setContacts(updatedContacts);
        };

        const unsubscribe = navigation.addListener('focus', reloadContacts);

        return unsubscribe;
    }, [navigation]);

    // Controle das informacoes na lista de contato
    const renderItem = ({ item }) => (
        <View style={styles.contact}>
            <View style={styles.info}>
                <Text style={styles.contactName}>{item.firstName} {item.lastName}{"\n\n"}
                    {item.phones}{"\n\n"}
                    {item.emails}{"\n\n"}
                    {item.addresses}</Text>
            </View>
            <TouchableOpacity onPress={() => removeContact(item.key)}>
                <MaterialCommunityIcons name="delete-forever" size={30} color="red" />
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign
                    name="arrowleft"
                    size={30}
                    color="white"
                    onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Contatos</Text>
            </View>
            <FlatList
                data={contacts}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                contentContainerStyle={styles.contactsContainer} />
                {/*Para ir para tela de criar contato */}
            <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('NewContact')}>
                <AntDesign name="plus" size={32} color="white" />
            </TouchableOpacity>
        </View>
    );
}