import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Platform } from 'react-native';
import FormButton from '../components/FormButtom';
import FormInput from '../components/FormInput';
import SocialButton from '../components/SocialButton';
import { AuthContext } from '../navigation/AuthProvider';


const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { login, googleLogin, fbLogin } = useContext(AuthContext)
    const [data, setData] = useState({
        email: '',
        password: '',
        checkTextInputchange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true
    });

    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    const textInputChanged = (val) => {        
        if (val.match(validRegex)) {
            setData({
                ...data,
                email: val,
                checkTextInputchange: true,
                isValidUser:true
            });
        } else {
            setData({
                ...data,
                email: val,
                checkTextInputchange: false,
                isValidUser:false
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
        }else{
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
        
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const handleValidUser = (val) => {
        if (val.match(validRegex)) {
            setData({
                ...data,
                isValidUser: true
            })
        }else{
            setData({
                ...data,
                isValidUser: false
            })
        }

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <FormInput
                labelValue={data.email}
                // onChangeText={(userEmail) => setEmail(userEmail)}
                onChangeText={(userEmail) => textInputChanged(userEmail)}
                placeHolderText="Email"
                iconType="user"
                validationIcon={data.isValidUser ? "check-circle" : null}
                validationIconColor={data.isValidUser ? "#00ff00" : null}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
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
            <FormButton
                buttonTitle="Login"
                onPress={() => login(data.email, data.password)}
            />
            <TouchableOpacity style={styles.forgotButton} onPress={() => { }}>
                <Text style={styles.navButtonText}>Forgot Password?</Text>
            </TouchableOpacity>

            {Platform.OS == 'android' ? (
                <View>
                    <SocialButton
                        buttonTitle="Sing In with Facebook"
                        btnType="facebook"
                        color="#4867aa"
                        backgroundColor="#e6eaf4"
                        onPress={() => fbLogin()}
                    />
                    <SocialButton
                        buttonTitle="Sing In with Google"
                        btnType="google"
                        color="#de4d41"
                        backgroundColor="#f5e7ea"
                        onPress={() => googleLogin()}
                    />
                </View>
            ) : null}


            <TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
                <Text style={styles.navButtonText}>Click here to create new account</Text>
            </TouchableOpacity>
        </View>
    );
};

export default LoginScreen;

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