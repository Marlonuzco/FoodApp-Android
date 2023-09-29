import React from 'react';
import {View, Text, TouchableOpacity, Image, Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {deleteOrder} from '../../../../redux/actions/backOrders';

import OrderIcon from '../../../../src/images/iconos/orderIcon.png';
import styles from './styles';

export const RenderItem = ({item, index}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const showAlert = () =>
    Alert.alert(
      '¿Are you sure you want to delete and cancel this order?',
      'If you are sure press ok',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () => dispatch(deleteOrder(index)),
        },
      ],
    );
  return (
    <View style={styles.renderItem}>
      <TouchableOpacity
        style={styles.container4}
        onPress={() => {
          navigation.navigate('OrderScreen', item);
        }}>
        <Image source={OrderIcon} style={styles.photo} />
        <Text style={styles.itemName}>Order {index + 1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          showAlert();
        }}>
        <Icon name="trash" size={35} style={styles.trashIcon} />
      </TouchableOpacity>
    </View>
  );
};

export const RenderEmptyComp = () => {
  return <Text style={styles.title2}>No orders on hold</Text>;
};
