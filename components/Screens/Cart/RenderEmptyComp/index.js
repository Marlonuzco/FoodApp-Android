import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import ButtonComp from '../../../Button/index';
import styles from './styles';

const RenderEmptyComp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Text style={styles.title}>No items in cart</Text>
      <ButtonComp
        onPress={() => {
          navigation.navigate('Categories');
        }}
        BtnStyle={styles.ButtonStyle}
        title={'! Search products ¡'}
        TitleStyle={styles.TitleBtnStyle}
      />
    </View>
  );
};

export default RenderEmptyComp;
