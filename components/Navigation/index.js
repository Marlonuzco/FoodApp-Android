import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeSreen from '../Screens/Home/index';
import FavoritesSreen from '../Screens/FavoriteScreen/index';
import AccountSreen from '../Screens/Account/index';
import CartScreen from '../Screens/Cart/index';
import OrdersScreen from '../Screens/BackOrders/index';
import {bgColor1, bgColor3, bgColor5} from '../../utils/GlobalStyles';

const Tab = createBottomTabNavigator();

function Navigation({cart, backOrders}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: bgColor1,
          borderRadius: 20,
          position: 'absolute',
          margin: 10,
        },
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarInactiveTintColor: 'white',
        headerShown: false,
        tabBarActiveTintColor: bgColor3,
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
          tabBarBadge: cart.totalItems,
          tabBarBadgeStyle: {
            backgroundColor: bgColor5,
            color: 'white',
          },
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
          tabBarBadge: backOrders.TotalOrders,
          tabBarBadgeStyle: {
            backgroundColor: bgColor5,
            color: 'white',
          },
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
  );
}

export default connect(store => ({
  cart: store.cart,
  backOrders: store.backOrders,
}))(Navigation);
