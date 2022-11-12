import React from 'react';
import {connect} from 'react-redux';
import {Text, View, TouchableOpacity, ImageBackground} from 'react-native';

import img1 from './../../../src/images/fondo2.jpeg';
import styles from './styles';

function Login({navigation}) {
  return (
    <>
      <ImageBackground source={img1} resizeMode="cover" style={styles.bgImg}>
        <View style={styles.container1}>
          <Text style={styles.title}>The Food App</Text>
        </View>
        <View style={styles.container2}>
          <TouchableOpacity
            style={styles.touchables}
            onPress={() => navigation.navigate('LoginForm')}>
            <Text style={styles.touchableText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.touchables}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.touchableText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <Text style={styles.footer}>
            Developed by Marlon Uzcátegui © 2022
          </Text>
        </View>
      </ImageBackground>
    </>
  );
}
export default connect(store => ({
  auth: store.auth,
}))(Login);
