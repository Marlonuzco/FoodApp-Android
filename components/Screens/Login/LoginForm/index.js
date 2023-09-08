import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useFormik} from 'formik';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Yup from 'yup';
import {login} from '../../../../redux/actions/auth';

import ButtonComp from '../../../Button/index';
import img1 from './../../../../src/images/fondo2.jpeg';
import styles from './styles';

function LoginForm({navigation}) {
  const dispatch = useDispatch();
  const [seePassword, setSeePassWord] = useState(true);
  const {error, isFetching} = useSelector(store => store.auth);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      dispatch(login(formValue));
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
              placeholderTextColor={'grey'}
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
                placeholderTextColor={'grey'}
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
                <RenderIcon seePassword={seePassword} />
              </TouchableOpacity>
            </View>
            <Text style={styles.error}>{formik.errors.password}</Text>
            {error && (
              <Text style={styles.error}>Error en las credenciales</Text>
            )}
          </View>
          <View style={styles.container4}>
            {isFetching ? (
              <ActivityIndicator color={'white'} size={30} />
            ) : (
              <ButtonComp
                tittle={'Log in'}
                tittleStyle={styles.LoginbtnTx}
                extraComp={<RenderIcon2 IconColor={'white'} />}
                ButtonStyle={styles.Loginbtn}
                onPress={() => formik.handleSubmit()}
              />
            )}
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

export default LoginForm;

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

export const RenderIcon = ({seePassword}) => {
  if (seePassword === true) {
    return <Icon name="eye-slash" size={20} color={'black'} />;
  } else {
    return <Icon name="eye" size={20} color={'#BF1A1A'} />;
  }
};

export const RenderIcon2 = ({IconColor}) => {
  return <Icon name="sign-in-alt" size={20} color={IconColor} />;
};
