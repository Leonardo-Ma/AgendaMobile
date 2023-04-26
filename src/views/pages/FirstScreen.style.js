import { StatusBar, StyleSheet } from "react-native";

const statusBar = StatusBar.currentHeight ? StatusBar.currentHeight + 10 : 64;

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00eae9',
        paddingTop: statusBar,
    },
    header: {
        flexDirection: 'row',
        height: 40,
        paddingHorizontal: 20,
    },
    headerTitle: {
        left: 85,
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
    },
    contactsContainer: {
        paddingHorizontal: 25,
        paddingVertical: 10,
    },
    contact:
    {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 30,
        marginVertical: 5,
        padding: 8,
    },
    contactName: {
        flex: 1,
        marginLeft: 20,
        fontSize: 16,
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#00eae9',
        borderRadius: 50,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 5,
    },
    info: {
        flex: 1,
        marginLeft: 10,
    },
});