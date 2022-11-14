import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import HomeSreen from '../Screens/Home/index';
import FavoritesSreen from '../Screens/FavoriteScreen/index';
import AccountSreen from '../Screens/Account/index';
import CartScreen from '../Screens/Others/index';
import CategoriesScreen from '../Screens/Categories/index';

import styles from './styles';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          /* tabBarStyle: styles.tabbar, */
          /* tabBarInactiveTintColor: '#bdc3c7', */
          headerShown: false,
          /* tabBarShowLabel: false, */
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
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarLabel: 'Categories',
            tabBarIcon: ({size, color}) => (
              <Icon name="list" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({size, color, focused}) => (
              <Icon name="shopping-cart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Favorites"
          component={FavoritesSreen}
          options={{
            tabBarLabel: 'Favorites',
            tabBarIcon: ({size, color}) => (
              <Icon name="heart" size={size} color={color} />
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
