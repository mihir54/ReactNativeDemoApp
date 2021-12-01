import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../Screens/OnBoardingScreen';
import LoginScreen from '../Screens/LoginScreen';
import SignUpScreen from '../Screens/SignUpScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import CheckoutScreen from '../Screens/CheckoutScreen';

const Stack = createStackNavigator();

const AuthStack = () => {

    const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

    let routeName;

    useEffect(() => {
        AsyncStorage.getItem('alreadyLaunched').then(value => {
            if (value == null) {
                AsyncStorage.setItem('alreadyLaunched', 'true')
                setIsFirstLaunch(true)
            } else {
                setIsFirstLaunch(false)
            }
        });

        GoogleSignin.configure({
            webClientId: '97004846223-v8gn8kg3qsi8g2g7icpi817hmv2shm8k.apps.googleusercontent.com',
        });

    }, []);

    if (isFirstLaunch == null) {
        return null;
    } else if (isFirstLaunch == true) {
        routeName = 'Onboarding';
    } else {
        routeName = 'Login1';
    }


    return (
        <Stack.Navigator initialRouteName={routeName}>
            <Stack.Screen
                name="Onboarding"
                component={OnBoardingScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Login1"
                component={LoginScreen}
                options={{ header: () => null }}
            />
            <Stack.Screen
                name="Signup"
                component={SignUpScreen}
                options={({ navigation }) => ({
                    title: '',
                    headerStyle: {
                        backgroundColor: '#f9fafd',
                        elevation: 0,
                        shadowColor: '#f9fafd',
                    },
                    headerLeft: () => (
                        <View style={{ marginLeft: 10 }}>
                            <FontAwesome.Button
                                name="long-arrow-left"
                                size={25}
                                backgroundColor="#f9fafd"
                                color="#333"
                                onPress={() => navigation.navigate('Login1')}
                            />
                        </View>
                    )
                })}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;