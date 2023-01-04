import React, {useState} from 'react';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import {renderIcon} from '../LoginForm';
import {renderIcon2} from '../LoginForm';
import img1 from '../../../../src/images/fondo2.jpeg';
import styles from './styles';

function LoginRegisterScreen({navigation}) {
  const [seePassword, setSeePassWord] = useState(true);
  return (
    <ImageBackground source={img1} resizeMode="cover" style={styles.bgImg}>
      <ScrollView>
        <View style={styles.container0}>
          <View style={styles.container1}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.tx1}>Enter your details</Text>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.container2}>
              <TextInput
                placeholder="FirstName"
                style={styles.input1}
                placeholderTextColor={'grey'}
                va
              />
            </View>
            <View style={styles.container2}>
              <TextInput
                placeholder="LastName"
                style={styles.input1}
                placeholderTextColor={'grey'}
              />
            </View>
          </View>
          <View style={styles.emailInputContainer}>
            <TextInput
              placeholderTextColor={'grey'}
              autoCapitalize="none"
              placeholder="Username"
              style={styles.emailInput}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="E-mail"
              style={styles.emailInput}
              placeholderTextColor={'grey'}
            />
            <View style={styles.inputPassWordView}>
              <TextInput
                placeholderTextColor={'grey'}
                placeholder="Password"
                secureTextEntry={seePassword}
                maxLength={20}
                textContentType="password"
                style={[styles.emailInput, {position: 'absolute'}]}
              />
              <TouchableOpacity
                onPress={() => setSeePassWord(!seePassword)}
                style={styles.showBtn}>
                {renderIcon(seePassword)}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.btns}>
            <TouchableOpacity style={styles.touchLoged}>
              <Text style={styles.txTouch}>Sign Up {renderIcon2()}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default LoginRegisterScreen;
