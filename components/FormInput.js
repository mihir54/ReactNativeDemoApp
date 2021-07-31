import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { windowWidth, windowHeight } from '../utils/Dimension';
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, placeHolderText, iconType, ...rest }) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign name={iconType} size={25} color="#666" />
            </View>
            <TextInput
                value={labelValue}
                style={styles.input}
                numberOfLines={1}
                placeholder={placeHolderText}
                placeholderTextColor="#666"
                {...rest}
            />
        </View>
    );
};
export default FormInput;

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 10,
        width: '100%',
        height: windowHeight / 15,
        borderColor: '#ccc',
        borderWidth: 1,
        alignItems: 'center',
        borderRadius: 3,
        flexDirection: 'row',
        backgroundColor:'#fff'
    },
    iconStyle: {
        padding: 10,
        justifyContent: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        height: '100%',
        width: 50,
        alignItems: 'center'
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputField: {
        marginTop: 5,
        marginBottom: 10,
        width: windowWidth / 1.5,
        height: windowHeight / 15,
        borderWidth: 1,
        padding: 10,
        borderRadius: 8,
        fontSize: 16
    }
})