import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import ImgBg1 from '../../../src/images/fondoAccount1.jpg';
import {userDetails} from '../../../utils/getUser';

import styles from './styles';

function AccountScreen({navigation}) {
  const dispatch = useDispatch();
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.title2}> User Details : </Text>
          <Image style={styles.img1} source={userDetails.image} />
          <Text>Profile Photo</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.tx2}>E-mail: {userDetails.email}</Text>
          <Text style={styles.tx2}>Firstname: {userDetails.firstname}</Text>
          <Text style={styles.tx2}>LastName: {userDetails.lastName}</Text>
          <Text style={styles.tx2}>Username: {userDetails.username}</Text>
        </View>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.touchable1}
            onPress={() => {
              dispatch({type: 'AUTH_LOGOUT'});
            }}>
            <Text style={styles.tx1}>Log out {renderIcon()}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

function renderIcon() {
  return <Icon name="sign-out-alt" size={20} />;
}

export default connect(store => ({
  auth: store.auth,
}))(AccountScreen);
