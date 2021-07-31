import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import CategoryScreen from './CategoryScreen';
import MyBagScreen from './MyBagScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import StoreLocaterScreen from './StoreLocaterScreen';
import { View } from 'react-native';

const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#e91e63"
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarLabel: 'Category',
          tabBarIcon: ({ color }) => (
            <Icon name="grid-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="StoreLocater"
        component={StoreLocaterScreen}
        options={{
          tabBarLabel: 'StoreLocater',
          tabBarIcon: ({ color }) => (
            <Icon name="location-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={PrifleStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name="person-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="MyBag"
        component={MyBagScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({ color }) => (
            <Icon name="cart-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: '#fff',
        shadowColor:'#fff',
        elevation:0
      },
      headerTintColor: '#333',
      headerTitleStyle: {
        marginRight: 50
      },
    }}>
    <HomeStack.Screen
      name='Home'
      component={HomeScreen}      
      options={{
        title:'Home',
        headerLeft: () => (
          <View style={{ marginLeft: 10 }}>
            <Icon
              name="md-menu"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => navigation.openDrawer()}
            ></Icon>
          </View>
        ),
        headerRight: () => (
          <View style={{ flexDirection: 'row', marginRight: 10 }}>
            <Icon
              style={{ paddingRight: 10 }}
              name="heart-outline"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => { }}
            ></Icon>
             <Icon
              style={{ paddingRight: 10 }}
              name="search-outline"
              size={25}
              color="#333"
              backgroundColor="#fff"
              onPress={() => { }}
            ></Icon>
          </View>
        )        
      }} />
  </HomeStack.Navigator>
);

const PrifleStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen
      name='Profile'
      component={ProfileScreen}
      options={{
        headerLeft: () => (
          <Icon
            style={{ paddingLeft: 10 }}
            name="md-menu"
            size={25}
            backgroundColor="#fff"
            background="#000"
            onPress={() => navigation.openDrawer()}
          ></Icon>
        )
      }}
    />
  </ProfileStack.Navigator>
);