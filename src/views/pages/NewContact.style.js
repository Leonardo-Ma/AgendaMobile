import { StatusBar, StyleSheet } from 'react-native';

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00eae9',
        paddingTop: statusBar,
    },
    header: {
        backgroundColor: '#00eae9',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingHorizontal: 20,
    },
    headerTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
    },
    saveButton: {
        paddingHorizontal: 8,
        paddingVertical: 8,
        backgroundColor: 'grey',
        borderRadius: 40,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
    formContainer: {
        padding: 20,
    },
    inputContainer: {
        marginBottom: 20,
    },
    label: {
        marginBottom: 8,
        color: '#777',
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: '#999',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 8,
        fontSize: 16,
        color: '#555',
    },
    addButton: {
        backgroundColor: '#00eae9',
        fontSize: 24,
        alignSelf: 'flex-end',
    },
    deleteButton:
    {
        paddingTop: 10,
        color: 'red',
        backgroundColor: '#00eae9',
        fontSize: 24,
    },
});
