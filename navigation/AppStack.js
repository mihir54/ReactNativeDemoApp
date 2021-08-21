import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from '../Screens/MainTabScreen';
import { DrawerContent } from '../Screens/DrawerContent';
import SubscriptionScreen from '../Screens/SubscriptionScreen';
import { PersistGate } from 'redux-persist/es/integration/react';
// import configureStore from '../src/Store';
import reduxStore from '../src/Store';
import { Provider } from 'react-redux';

// const store = configureStore();
const Drawer = createDrawerNavigator()
const { store, persistor } = reduxStore();

const AppStack = () => {    
    return (
        <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
                <Drawer.Navigator initialRouteName="Home" drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
                    {/* <Drawer.Screen name="SubscriptionScreen" component={SubscriptionScreen} /> */}
                </Drawer.Navigator>
             </PersistGate>
         </Provider>
    );
};

export default AppStack;