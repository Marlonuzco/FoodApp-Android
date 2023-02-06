import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeSreen from '../Screens/Home/index';
import FavoritesSreen from '../Screens/FavoriteScreen/index';
import AccountSreen from '../Screens/Account/index';
import CartScreen from '../Screens/Cart/index';
import OrdersScreen from '../Screens/BackOrders/index';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarInactiveTintColor: 'black',
          headerShown: false,
          tabBarActiveTintColor: '#BF1A1A',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeSreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({size, color}) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({size, color}) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={OrdersScreen}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({size, color}) => (
              <Icon name="clipboard-list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesSreen}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({size, color}) => (
              <Icon name="heart" size={size} color={color} solid={true} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={AccountSreen}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({size, color}) => (
              <Icon name="user-alt" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Navigation;
