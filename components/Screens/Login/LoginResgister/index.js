import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {send_new_user} from '../../../../redux/actions/auth';

import {RenderIcon, RenderIcon2} from '../LoginForm';
import img1 from '../../../../src/images/fondo2.jpeg';
import ButtonComp from '../../../Button/index';

import styles from './styles';

function LoginRegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const [seePassword, setSeePassWord] = useState(true);
  const {isFetching, NewUserError, userNameExist} = useSelector(
    store => store.auth,
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: formValue => {
      dispatch(send_new_user(formValue));
    },
  });
  return (
    <ImageBackground source={img1} resizeMode="cover" style={styles.bgImg}>
      <ScrollView>
        <View style={styles.container0}>
          <View style={styles.container1}>
            <Text style={styles.title}>Sign Up</Text>
            <Text style={styles.tx1}>Enter your data</Text>
          </View>
          <View style={styles.inputsContainer}>
            <View style={styles.container2}>
              <TextInput
                placeholder="FirstName"
                style={styles.input1}
                placeholderTextColor={'grey'}
                value={formik.values.firstname}
                onChangeText={text => {
                  formik.setFieldValue('firstname', text);
                }}
              />
              <Text style={styles.errorTx}>{formik.errors.firstname}</Text>
            </View>
            <View style={styles.container2}>
              <TextInput
                placeholder="LastName"
                style={styles.input1}
                placeholderTextColor={'grey'}
                value={formik.values.lastname}
                onChangeText={text => {
                  formik.setFieldValue('lastname', text);
                }}
              />
              <Text style={styles.errorTx}>{formik.errors.lastname}</Text>
            </View>
          </View>
          <View style={styles.emailInputContainer}>
            <TextInput
              placeholderTextColor={'grey'}
              autoCapitalize="none"
              placeholder="Username"
              style={styles.emailInput}
              value={formik.values.username}
              onChangeText={text => {
                formik.setFieldValue('username', text);
              }}
            />
            <Text style={styles.errorTx}>{formik.errors.username}</Text>
            <TextInput
              inputMode="numeric"
              autoCapitalize="none"
              placeholder="Phone number"
              style={styles.emailInput}
              placeholderTextColor={'grey'}
              value={formik.values.phonenumber}
              onChangeText={text => {
                formik.setFieldValue('phonenumber', text);
              }}
            />
            <Text style={styles.errorTx}>{formik.errors.phonenumber}</Text>
            <TextInput
              autoCapitalize="none"
              placeholder="E-mail"
              style={styles.emailInput}
              placeholderTextColor={'grey'}
              value={formik.values.email}
              onChangeText={text => {
                formik.setFieldValue('email', text);
              }}
            />
            <Text style={styles.errorTx}>{formik.errors.email}</Text>
            <View style={styles.inputPassWordView}>
              <TextInput
                placeholderTextColor={'grey'}
                placeholder="Password"
                secureTextEntry={seePassword}
                maxLength={20}
                textContentType="password"
                style={[styles.emailInput, {position: 'absolute'}]}
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
            <Text style={styles.errorTx}>{formik.errors.password}</Text>
          </View>
          {NewUserError && (
            <Text style={styles.errorTx}>Error to create a new user</Text>
          )}
          <View style={styles.btns}>
            {isFetching ? (
              <ActivityIndicator color={'white'} size={30} />
            ) : (
              <ButtonComp
                onPress={() => {
                  formik.handleSubmit();
                }}
                title={'Sign Up'}
                TitleStyle={styles.txTouch}
                BtnStyle={styles.touchLoged}
                children={<RenderIcon2 IconColor={'white'} />}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

function initialValues() {
  return {
    username: '',
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    phonenumber: '',
    profileimage: '',
  };
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
    username: Yup.string()
      .required('The username is required')
      .min(5, 'The username is too short')
      .max(30, 'The username is too long'),
    firstname: Yup.string().required('The firstname is required'),
    lastname: Yup.string().required('The lastname is required'),
    phonenumber: Yup.string()
      .required('The phonenumber is required')
      .min(11, 'The phone number is Too Short'),
  };
}

export default LoginRegisterScreen;
