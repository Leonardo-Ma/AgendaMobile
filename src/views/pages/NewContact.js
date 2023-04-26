import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign, Feather } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './NewContact.style.js';

export default function NewContact({ navigation })
{
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emails, setEmails] = useState(['']);
    const [phones, setPhones] = useState(['']);
    const [addresses, setAddresses] = useState(['']);

    const addEmail = () =>
    {
        setEmails([...emails, '']);
    };

    const updateEmail = (text, index) =>
    {
        const newEmails = [...emails];
        newEmails[index] = text;
        setEmails(newEmails);
    };

    const removeEmail = (index) =>
    {
        const newEmails = [...emails];
        newEmails.splice(index, 1);
        setEmails(newEmails);
    };

    const addPhone = () =>
    {
        setPhones([...phones, '']);
    };

    const updatePhone = (text, index) =>
    {
        const newPhones = [...phones];
        newPhones[index] = formatPhoneNumber(text);
        setPhones(newPhones);
    };

    const removePhone = (index) =>
    {
        const newPhones = [...phones];
        newPhones.splice(index, 1);
        setPhones(newPhones);
    };

    const formatPhoneNumber = (phoneNumberString) =>
    {
        let cleaned = ('' + phoneNumberString).replace(/\D/g, '');
        let match = cleaned.match(/^(\d{2})(\d{4,5})(\d{4})$/);
        if (match)
        {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return phoneNumberString;
    };

    const addAddress = () =>
    {
        setAddresses([...addresses, '']);
    };

    const updateAddress = (text, index) =>
    {
        const newAddresses = [...addresses];
        newAddresses[index] = text;
        setAddresses(newAddresses);
    };

    const removeAddress = (index) =>
    {
        const newAddresses = [...addresses];
        newAddresses.splice(index, 1);
        setAddresses(newAddresses);
    };

    const saveContact = async () =>
    {
        try
        {
            await AsyncStorage.setItem(
                `@${firstName}${lastName}_contact`,
                JSON.stringify({
                    firstName,
                    lastName,
                    phones: phones.join('\n'),
                    emails: emails.join('\n'),
                    addresses: addresses.join('\n')
                })
            );
            navigation.goBack();
        } catch (e) { console.log(e); }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <AntDesign name="arrowleft" size={30} color="white" onPress={() => navigation.goBack()} />
                <Text style={styles.headerTitle}>Novo Contato</Text>
                <TouchableOpacity onPress={saveContact}>
                    <View style={styles.saveButton}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <ScrollView contentContainerStyle={styles.formContainer}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={firstName}
                        onChangeText={setFirstName}
                        placeholder="Digite o nome"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Sobrenome:</Text>
                    <TextInput
                        style={styles.input}
                        value={lastName}
                        onChangeText={setLastName}
                        placeholder="Digite o sobrenome"
                    />
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={addPhone}>
                        <View>
                            <Feather
                                name="plus"
                                color="white"
                                style={styles.addButton} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.label}>Telefone:</Text>
                    {phones.map((phone, index) => (
                        <View key={`phone-${index}`} >
                            <TextInput
                                style={styles.input}
                                value={phone}
                                onChangeText={(text) => updatePhone(text, index)}
                                placeholder="Digite o número de telefone"
                                keyboardType="phone-pad"
                            />
                            <Feather
                                name="delete"
                                style={styles.deleteButton}
                                onPress={() => removePhone(index)} />
                        </View>
                    ))}
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={addEmail}>
                        <View>
                            <Feather
                                name="plus"
                                color="white"
                                style={styles.addButton} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.label}>E-mail:</Text>
                    {emails.map((email, index) => (
                        <View key={`email-${index}`}>
                            <TextInput
                                style={styles.input}
                                value={email}
                                onChangeText={(text) => updateEmail(text, index)}
                                placeholder="Digite o endereço de e-mail"
                                keyboardType="email-address" />
                            <Feather
                                name="delete"
                                style={styles.deleteButton}
                                onPress={() => removeEmail(index)} />
                        </View>
                    ))}
                </View>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={addAddress}>
                        <View>
                            <Feather
                                name="plus"
                                color="white"
                                style={styles.addButton} />
                        </View>
                    </TouchableOpacity>
                    <Text style={styles.label}>Endereço:</Text>
                    {addresses.map((address, index) => (
                        <View key={`address-${index}`}>
                            <TextInput
                                style={styles.input}
                                value={address}
                                onChangeText={(text) => updateAddress(text, index)}
                                placeholder="Digite o endereço" />
                            <Feather
                                name="delete"
                                style={styles.deleteButton}
                                onPress={() => removeAddress(index)} />
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
}