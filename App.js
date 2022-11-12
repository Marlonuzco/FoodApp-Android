import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LoginScreen from './components/Screens/Login/index.js.js';
import LoginForm from './components/Screens/Login/LoginForm/index.js';
import LoginRegisterScreen from './components/Screens/Login/LoginResgister/index.js';
import DesktopScreen from './components/Screens/Desktop/index';
import AccountScreen from './components/Screens/Account/index';
import CartScreen from './components/Screens/Others/index.js';
import RescuePassWordScreen from './components/Screens/Login/PassWordRescue/index.js';

const Stack = createStackNavigator();

function App({auth, navigation}) {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {auth.isLogged ? (
              <Stack.Screen
                name="Desktop"
                component={DesktopScreen}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{headerShown: false}}
              />
            )}
            <Stack.Screen
              name="LoginForm"
              component={LoginForm}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Register"
              component={LoginRegisterScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RescuePass"
              component={RescuePassWordScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Account"
              component={AccountScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Cart"
              component={CartScreen}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(App);
