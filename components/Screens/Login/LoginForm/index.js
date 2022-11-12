import React, {useState} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {useFormik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Yup from 'yup';

import img1 from './../../../../src/images/fondo2.jpeg';
import {user} from '../../../../utils/getUser';
import styles from './styles';

function LoginForm({login, auth, navigation}) {
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  const [seePassword, setSeePassWord] = useState(true);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      setError('');
      const {email, password} = formValue;

      if (email !== user.email || password !== user.password) {
        setError('The email or password is incorrect');
        console.log('El correo o la contraseña no son correctas');
      } else {
        dispatch({type: 'AUTH_LOGIN'});
        navigation.navigate('Desktop');
        console.log('Login correcto');
      }
    },
  });

  return (
    <>
      <ImageBackground source={img1} resizeMode="cover" style={styles.bgImg}>
        <ScrollView>
          <View style={styles.container1}>
            <Text style={styles.title}>Log In</Text>
          </View>
          <View style={styles.container2}>
            <TextInput
              placeholder="E-mail"
              keyboardType="email-address"
              autoCompleteType="email"
              style={[styles.input, {width: 330}]}
              autoCapitalize="none"
              maxLength={50}
              value={formik.values.email}
              onChangeText={text => {
                formik.setFieldValue('email', text);
              }}
            />
            <Text style={styles.error}>{formik.errors.email}</Text>
            <View style={styles.container3}>
              <TextInput
                placeholder="Password"
                secureTextEntry={seePassword}
                maxLength={20}
                textContentType="password"
                style={styles.input}
                value={formik.values.password}
                onChangeText={text => {
                  formik.setFieldValue('password', text);
                }}
              />
              <TouchableOpacity
                onPress={() => setSeePassWord(!seePassword)}
                style={styles.showBtn}>
                {renderIcon(seePassword)}
              </TouchableOpacity>
            </View>
            <Text style={styles.error}>{formik.errors.password}</Text>
            <Text style={styles.error}>{error}</Text>
          </View>
          <View style={styles.container4}>
            <TouchableOpacity
              style={styles.Loginbtn}
              onPress={formik.handleSubmit}>
              <Text style={styles.touchable3}>Log in {renderIcon2()}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchable2}
              onPress={() => {
                navigation.navigate('RescuePass');
              }}>
              <Text style={styles.txtouchable2}>¿Forgot your password?</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(LoginForm);

function initialValues() {
  return {email: '', password: ''};
}

function validationSchema() {
  return {
    email: Yup.string()
      .email('Invalid email')
      .required('The Email is required'),
    password: Yup.string()
      .required('The password is required')
      .min(5, 'The password is Too Short!')
      .max(20, 'The password is Too Long!'),
  };
}

export function renderIcon(seePassword) {
  if (seePassword === true) {
    return <Icon name="eye-slash" size={25} />;
  } else {
    return <Icon name="eye" size={25} color={'blue'} />;
  }
}

export function renderIcon2() {
  return <Icon name="sign-in-alt" size={20} />;
}
