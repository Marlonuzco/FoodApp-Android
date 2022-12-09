import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';

import {axiosInstance} from '../../../axios';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ImgBg1 from '../../../src/images/fondo2.jpeg';

import styles from './styles';

function AccountScreen({navigation}) {
  const [userData, setUserData] = useState([]);
  const [Fail, setFail] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const response = await axiosInstance.get('/user');
        setUserData(response.data);
      } catch (error) {
        /*  console.log(error); */
        setFail(true);
      }
    };
    getUserData();
  }, [setUserData]);
  /* console.log(userData); */

  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <ScrollView>
        {Fail ? (
          <View
            style={[
              styles.container2,
              {
                height: 150,
                width: '85%',
                marginTop: '60%',
                marginBottom: '40%',
                justifyContent: 'center',
              },
            ]}>
            <Text style={styles.title2}>Error en la carga de datos</Text>
          </View>
        ) : (
          userData.map(item => (
            <View key={item.id}>
              <View style={styles.container1}>
                <Text style={styles.title}>Account</Text>
                <Text style={styles.title2}> User Details : </Text>
                <Image
                  style={styles.img1}
                  source={{
                    uri: 'http://10.0.2.2:3001/assets/images/UserPhoto/UserImg.png',
                  }}
                />
                <Text>Profile Photo</Text>
              </View>
              <View style={styles.container2}>
                <Text style={styles.tx2}>E-mail: {item.userInfo.email}</Text>
                <Text style={styles.tx2}>
                  Firstname: {item.userInfo.firstname}
                </Text>
                <Text style={styles.tx2}>
                  LastName: {item.userInfo.lastName}
                </Text>
                <Text style={styles.tx2}>
                  Username: {item.userInfo.username}
                </Text>
              </View>
            </View>
          ))
        )}
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
