import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

const ProfileScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>ProfileScreen Screen </Text>
        </View>
    );
};
export default ProfileScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#f9fafd',
        flex: 1
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
});