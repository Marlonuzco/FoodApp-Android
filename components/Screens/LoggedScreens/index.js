import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../Categories/index';
import Navigation from '../../Navigation';
import Products from '../Categories/Products/index';
import ProductsCategories from '../Categories/ProductsCategories';

const Stack = createStackNavigator();

function LoggedScreens({navigation}) {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen
          name="Navigation"
          component={Navigation}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductsCategories"
          component={ProductsCategories}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </>
  );
}

export default LoggedScreens;
