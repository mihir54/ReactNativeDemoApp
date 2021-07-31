import React from 'react';
import { View, StyleSheet, Text, Button, Image } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';

const OnBoardingScreen = ({navigation}) => {
    return (
        <Onboarding
            onSkip={() => navigation.replace("Login1")}
            onDone={() => navigation.navigate("Login1")}            
            pages={[
                {
                    backgroundColor: '#a6e4d0',
                    image: <Image source={require('../assests/onboarding-img1.png')} />,
                    title: 'Onboarding1',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#fdeb93',
                    image: <Image source={require('../assests/onboarding-img2.png')} />,
                    title: 'Onboarding2',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
                {
                    backgroundColor: '#e9bcbe',
                    image: <Image source={require('../assests/onboarding-img3.png')} />,
                    title: 'Onboarding3',
                    subtitle: 'Done with React Native Onboarding Swiper',
                },
            ]}
        />
    );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})