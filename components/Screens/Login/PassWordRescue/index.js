import React from 'react';
import {Text, View, ImageBackground} from 'react-native';

import styles from './styles';
import img1 from '../../../../src/images/fondo2.jpeg';

function RescuePassWordScreen({navigate}) {
  return (
    <>
      <ImageBackground source={img1} style={styles.ImageBackground}>
        <Text style={styles.title}>Rescue you Password</Text>
        <View style={styles.container0}>
          <Text style={styles.tx1}>Falta por definir esta vista</Text>
        </View>
      </ImageBackground>
    </>
  );
}

export default RescuePassWordScreen;
