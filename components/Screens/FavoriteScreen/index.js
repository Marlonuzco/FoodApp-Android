import React from 'react';
import {Alert} from 'react-native';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import {logout} from '../../../redux/actions/auth';

function FavoriteScreen({navigation}) {
  const dispatch = useDispatch();
  const handleOnlogout = () => {
    Alert.alert('Cerrar', 'Desea cerrar sesión?', [
      {
        text: 'No',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Si', onPress: () => logout() && dispatch({type: 'AUTH_LOGOUT'})},
    ]);
  };
  return (
    <>
      <View>
        <Text>FavoriteScreen</Text>
        <TouchableOpacity
          onPress={() => {
            handleOnlogout;
          }}>
          <Text>Logout</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(FavoriteScreen);
