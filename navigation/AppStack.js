import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from '../Screens/MainTabScreen';
import { DrawerContent } from '../Screens/DrawerContent';
import SubscriptionScreen from '../Screens/SubscriptionScreen';

const Drawer = createDrawerNavigator()

const AppStack = () => {
    return (
        <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
            <Drawer.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
        </Drawer.Navigator>
    );
};

export default AppStack;