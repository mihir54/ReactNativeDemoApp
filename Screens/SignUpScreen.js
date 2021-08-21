import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { useContext } from 'react/cjs/react.development';
import FormButton from '../components/FormButtom';
import FormInput from '../components/FormInput';
import { AuthContext } from '../navigation/AuthProvider';
import { validRegex } from "../src/actions/Types"

const SignUpScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    const { register } = useContext(AuthContext);

    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        checkTextInputchange: false,
        secureTextEntry: true,
        confirmSecureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
        isValidConfirmPassword: true
    });

    const textInputChanged = (val) => {
        if (val.match(validRegex)) {
            setData({
                ...data,
                email: val,
                checkTextInputchange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputchange: false,
                isValidUser: false
            });
        }
    }

    const handleChangePassword = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

    const handleConfirmPasswordChanged = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                confirmPassword: val,
                isValidConfirmPassword: true
            });
        } else {
            setData({
                ...data,
                confirmPassword: val,
                isValidConfirmPassword: false
            });
        }
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirmSecureTextEntry: !data.confirmSecureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.match(validRegex)) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create An Account</Text>
            <FormInput
                labelValue={data.email}
                // onChangeText={(userEmail) => setEmail(userEmail)}
                onChangeText={(userEmail) => textInputChanged(userEmail)}

                placeHolderText="Email"
                iconType="user"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                validationIcon={data.isValidUser ? "check-circle" : null}
                validationIconColor={data.isValidUser ? "#00ff00" : null}
                checkTextInputchange={data.checkTextInputchange}
                onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
            />
            {data.isValidUser ? null :
                <View style={[{ alignSelf: 'flex-start' }]}>
                    <Text style={styles.errorMsg}>Please enter valid email</Text>
                </View>}
            <FormInput
                labelValue={data.password}
                // onChangeText={(userPassword) => setPassword(userPassword)}
                onChangeText={(userPassword) => handleChangePassword(userPassword)}
                placeHolderText="Password"
                iconType="lock"
                validationIcon={data.secureTextEntry ? "eye-off" : "eye"}
                validationIconColor="#808080"
                checkTextInputchange={true}
                secureTextEntry={data.secureTextEntry ? true : false}
                onPress={() => { updateSecureTextEntry() }}
            />
            {data.isValidPassword ? null :
                <View style={[{ alignSelf: 'flex-start' }]}>
                    <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
                </View>}
            <FormInput
                labelValue={data.confirmPassword}
                onChangeText={(userConfirmPassword) => handleConfirmPasswordChanged(userConfirmPassword)}
                placeHolderText="Confirm password"
                iconType="lock"
                validationIcon={data.confirmSecureTextEntry ? "eye-off" : "eye"}
                validationIconColor="#808080"
                checkTextInputchange={true}
                secureTextEntry={data.confirmSecureTextEntry ? true : false}
                onPress={() => { updateConfirmSecureTextEntry() }}
            />
            {data.isValidConfirmPassword ? null :
                <View style={[{ alignSelf: 'flex-start' }]}>
                    <Text style={styles.errorMsg}>Password must be 8 characters long</Text>
                </View>}
            <FormButton
                buttonTitle="Sign Up"
                onPress={() => register(data.email, data.password, data.confirmPassword)}
            />

            <TouchableOpacity style={styles.navButton} onPress={() => navigation.navigate('Login1')}>
                <Text style={styles.navButtonText}>Have an account? Sign In</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SignUpScreen;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
        backgroundColor: '#f9fafd',
        flex: 1
    },
    logo: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
});