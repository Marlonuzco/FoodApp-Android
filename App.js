import React from 'react';
import {connect} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import LoginScreen from './components/Screens/Login/index.js.js';
import LoginForm from './components/Screens/Login/LoginForm/index.js';
import LoginRegisterScreen from './components/Screens/Login/LoginResgister/index.js';
import LoggedScreen from './components/Screens/LoggedScreens/index';
import RescuePassWordScreen from './components/Screens/Login/PassWordRescue/index.js';

const Stack = createStackNavigator();

const LoginScreens = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
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
    </Stack.Navigator>
  );
};

function App({auth}) {
  return (
    <>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {auth.isLogged ? (
              <Stack.Screen
                name="Logged"
                component={LoggedScreen}
                options={{headerShown: false}}
              />
            ) : (
              <Stack.Screen
                name="LoginScreens"
                component={LoginScreens}
                options={{headerShown: false}}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(App);
