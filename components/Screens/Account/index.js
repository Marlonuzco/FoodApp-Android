import React from 'react';
import {connect, useDispatch, useSelector} from 'react-redux';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';
import {logout} from '../../../redux/actions/auth';

import ButtomComp from '../Buttom/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImgBg1 from '../../../src/images/fondo2.jpeg';
import {defaultUserImgUrl} from '../../../utils/utils';
import {serverUrl} from '../../../axios';

import styles from './styles';

function AccountScreen() {
  const dispatch = useDispatch();
  const {userInfo} = useSelector(store => store.auth);

  const newImgUrl = userInfo.profileimage?.replace(
    'http://localhost:4100',
    serverUrl,
  );
  const profileimageUri = {uri: newImgUrl || defaultUserImgUrl};
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.title}>Account</Text>
          <Text style={styles.title2}> User Details : </Text>
          <Image
            style={styles.img1}
            source={profileimageUri}
            alt="Profile Image"
          />
          <Text style={styles.profileImageTx}>Profile Photo</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.tx2}>E-mail: {userInfo.email}</Text>
          <Text style={styles.tx2}>Firstname: {userInfo.firstname}</Text>
          <Text style={styles.tx2}>LastName: {userInfo.lastname}</Text>
          <Text style={styles.tx2}>Username: {userInfo.username}</Text>
        </View>
        <View style={styles.container3}>
          <ButtomComp
            ButtomStyle={styles.touchable1}
            tittle={'Log out'}
            tittleStyle={styles.tx1}
            onPress={() => {
              dispatch(logout());
            }}
            extraComp={<Icon name="sign-out-alt" size={20} color={'white'} />}
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(AccountScreen);
