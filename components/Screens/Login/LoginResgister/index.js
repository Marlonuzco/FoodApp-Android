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

import img1 from '../../../../src/images/fondo2.jpeg';
import styles from './styles';

function LoginRegisterScreen({navigation}) {
  const [seePassword, setSeePassWord] = useState(true);
  return (
    <ImageBackground source={img1} resizeMode="cover" style={styles.bgImg}>
      <ScrollView>
        <View style={styles.container0}>
          <View style={styles.container1}>
            <Text style={styles.title}>Registrarse</Text>
            <Text style={styles.tx1}>Ingrese sus datos</Text>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.container2}>
              <TextInput placeholder="Nombre" style={styles.input1} />
            </View>
            <View style={styles.container2}>
              <TextInput placeholder="Apellido" style={styles.input1} />
            </View>
          </View>
          <View style={styles.emailInputContainer}>
            <TextInput
              autoCapitalize="none"
              placeholder="Username"
              style={styles.emailInput}
            />
            <TextInput
              autoCapitalize="none"
              placeholder="E-mail"
              style={styles.emailInput}
            />
            <View style={styles.inputPassWordView}>
              <TextInput
                placeholder="Contraseña"
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
              <Text style={styles.txTouch}>Registrarme</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default LoginRegisterScreen;
