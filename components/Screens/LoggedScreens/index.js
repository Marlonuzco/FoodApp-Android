import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import CategoriesScreen from '../Categories/index';
import Navigation from '../../Navigation';
import Products from '../Categories/Products/index';
import ProductsCategories from '../Categories/ProductsCategories';
import OrderScreen from '../BackOrders/OrderScreen/index';
import AccountScreen from '../Settings/Account/index';
import AboutScreen from '../Settings/About/index';
import TermsScreen from '../Settings/TermsScreen/index';
import ThemesScreen from '../Settings/Themes/index';
import LanguagesScreen from '../Settings/Languages/index';
import {bgColor3, bgColor5} from '../../../utils/GlobalStyles';

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
          options={{
            headerLeftContainerStyle: {
              marginTop: 10,
              backgroundColor: bgColor3,
              borderRadius: 15,
              marginLeft: 5,
            },
            headerRightContainerStyle: {marginTop: 10},
            headerTitleStyle: {marginTop: 10},
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="Products"
          component={Products}
          options={{
            headerLeftContainerStyle: {
              marginTop: 10,
              backgroundColor: bgColor5,
              borderRadius: 15,
              marginLeft: 10,
            },
            headerRightContainerStyle: {
              marginTop: 10,
              marginRight: 10,
            },
            headerTitleStyle: {
              marginTop: 10,
              color: bgColor3,
              textAlign: 'center',
            },
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
          }}
        />
        <Stack.Screen
          name="ProductsCategories"
          component={ProductsCategories}
          options={{
            headerLeftContainerStyle: {
              marginTop: 10,
              backgroundColor: bgColor3,
              borderRadius: 15,
              marginLeft: 5,
            },
            headerRightContainerStyle: {marginTop: 10},
            headerTitleStyle: {marginTop: 10},
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="OrderScreen"
          component={OrderScreen}
          options={{
            headerLeftContainerStyle: {
              marginTop: 10,
              backgroundColor: bgColor5,
              borderRadius: 15,
              marginLeft: 10,
            },
            headerRightContainerStyle: {
              marginTop: 10,
              marginRight: 10,
            },
            headerTitleStyle: {
              marginTop: 10,
              color: bgColor3,
              textAlign: 'center',
            },
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
          }}
        />
        <Stack.Screen
          name="AccountScreen"
          component={AccountScreen}
          options={{
            headerLeftContainerStyle: {
              marginTop: 10,
              backgroundColor: bgColor5,
              borderRadius: 15,
              marginLeft: 10,
            },
            headerRightContainerStyle: {
              marginTop: 10,
              marginRight: 10,
            },
            headerTitleStyle: {
              width: '100%',
              marginTop: 10,
              color: 'white',
              textAlign: 'center',
              marginRight: '20%',
            },
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitleContainerStyle: {
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            },
          }}
        />
        <Stack.Screen name="LanguagesScreen" component={LanguagesScreen} />
        <Stack.Screen name="TermsScreen" component={TermsScreen} />
        <Stack.Screen name="ThemesScreen" component={ThemesScreen} />
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </>
  );
}

export default LoggedScreens;
