import React, { useState, useContext } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, StyleSheet, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../navigation/AuthProvider';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';

export function DrawerContent(props) {
    
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggeleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    const {user,logout} = useContext(AuthContext);
    const theme = useTheme();

    return (
        
        <View style={{ flex: 1 }}>
            
            <DrawerContentScrollView {...props}>
            {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, marginBottom: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Mihir Prajapati</Title>
                                <Caption style={styles.Caption}>{user.email}</Caption>
                            </View>
                        </View>

                    </View>
                </View>
                <Drawer.Section style={styles.bottomDrawerSection}>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Home"
                        onPress={() => {props.navigation.navigate('Home')}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="grid-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Shop by Category"
                        onPress={() => {props.navigation.navigate('Category')}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="pricetag-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Shop by Brand"
                        onPress={() => { }}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="location-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Store Locater"
                        onPress={() => {props.navigation.navigate('StoreLocater')}}
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon
                                name="notifications-outline"
                                color={color}
                                size={size}
                            />
                        )}
                        label="Subscription"
                        onPress={() => {props.navigation.navigate('SubscriptionScreen')}}
                    />
                </Drawer.Section>
                <Drawer.Section title="Preferences">
                    <TouchableRipple onPress={() => { toggeleTheme() }}>
                        <View style={styles.preference}>
                            <Text>Dark Theme</Text>
                            <View pointerEvents='none'>
                                <Switch value={isDarkTheme}></Switch>
                            </View>
                        </View>
                    </TouchableRipple>

                </Drawer.Section>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="log-out-outline"
                            color={color}
                            size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {logout()}}
                />

            </Drawer.Section>

        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});