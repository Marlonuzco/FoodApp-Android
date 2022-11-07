import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';

import FavoritesSreen from '../Screens/FavoriteScreen/index';
import Others from '../Screens/Others/index';
import styles from './styles';

const Tab = createBottomTabNavigator();

function Navigation() {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Favorites"
          component={FavoritesSreen}
          options={{
            tabBarLabel: 'Favoritos',
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Icon name="heart" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Others"
          component={Others}
          options={{
            tabBarLabel: 'Others',
            headerShown: false,
            tabBarIcon: ({size, color}) => (
              <Icon name="exchange-alt" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default Navigation;
