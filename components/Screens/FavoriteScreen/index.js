import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function FavoriteScreen({navigation}) {
  return (
    <>
      <View>
        <Text>FavoriteScreen</Text>
      </View>
    </>
  );
}

export default connect(store => ({
  auth: store.auth,
}))(FavoriteScreen);
