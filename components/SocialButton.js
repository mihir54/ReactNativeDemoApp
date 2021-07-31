import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimension';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const socialButton = ({ buttonTitle, btnType, color, backgroundColor, ...rest }) => {
    let bgColor = backgroundColor;
    return (
        <TouchableOpacity style={[styles.buttonContainer, { backgroundColor: bgColor }]} {...rest}>
            <View style={styles.iconWrapper}>
                <FontAwesome name={btnType} style={styles.icon} size={22} color={color} />
            </View>
            <View style={styles.btnTxtWrapper}>
                <Text style={[styles.buttonText, { color: color }]}>{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default socialButton;

const styles = StyleSheet.create({
    buttonContainer: {
        marginTop: 10,
        width: '100%',
        height: windowHeight / 15,
        padding: 10,
        flexDirection: 'row',
        borderRadius: 3
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        fontWeight: 'bold',
    },
    btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
    },
})
