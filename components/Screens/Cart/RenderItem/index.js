import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeFromCart} from '../../../../redux/actions/cart';
import {incrementCount, decrementCount} from '../../../../redux/actions/cart';

import ButtonComp from '../../../Button/index';
import {serverUrl} from '../../../../axios';
import styles from './styles';
import {bgColor3} from '../../../../utils/GlobalStyles';

const RenderItem = item => {
  const dispatch = useDispatch();
  const {name, photo, counter, price, total_price, id} = item.item;
  const {index} = item;
  return (
    <View style={styles.RenderItem}>
      <Image
        source={{uri: `${serverUrl}${photo}`}}
        alt="ImageSource"
        style={styles.image}
      />
      <View style={styles.RenderItemView}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.RenderItemViewCounter}>
          <ButtonComp
            onPress={() => dispatch(decrementCount(index))}
            title={'-'}
            TitleStyle={styles.counterBtnTitle}
            BtnStyle={styles.counterBtn}
          />
          <Text style={styles.counter}>{counter}</Text>
          <ButtonComp
            onPress={() => {
              dispatch(incrementCount(index));
            }}
            title={'+'}
            TitleStyle={styles.counterBtnTitle}
            BtnStyle={styles.counterBtn}
          />
        </View>
      </View>
      <View style={[styles.RenderItemView, {width: '25%'}]}>
        <Text style={styles.priceTitle}>Price:</Text>
        <Text style={[styles.priceTitle, {fontSize: 15, fontWeight: 'bold'}]}>
          {price.toFixed(2)} $
        </Text>
        <Text style={styles.priceTitle}>Total price:</Text>
        <Text style={[styles.priceTitle, {fontSize: 15, fontWeight: 'bold'}]}>
          {total_price.toFixed(2)} $
        </Text>
      </View>
      <View style={styles.RenderItemViewTrash}>
        <TouchableOpacity
          onPress={() => {
            dispatch(removeFromCart(id));
          }}>
          <Icon name="delete" size={50} color={bgColor3} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RenderItem;
