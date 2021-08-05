import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from '../Screens/MainTabScreen';
import { DrawerContent } from '../Screens/DrawerContent';
import SubscriptionScreen from '../Screens/SubscriptionScreen';

import configureStore from '../src/Store';
import { Provider } from 'react-redux';

const store = configureStore();
const Drawer = createDrawerNavigator()

const AppStack = () => {
    return (
        <Provider store={store}>
            <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                <Drawer.Screen name="SubscriptionScreen" component={SubscriptionScreen} />
            </Drawer.Navigator>
        </Provider>
    );
};

export default AppStack;