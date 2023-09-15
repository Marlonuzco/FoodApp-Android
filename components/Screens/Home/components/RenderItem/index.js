import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addToCart} from '../../../../../redux/actions/cart';

import {serverUrl} from '../../../../../axios';
import styles from './styles';

//categories list component
export const RenderItem = ({item}) => {
  const navigation = useNavigation();
  const {name, photo} = item.item;
  return (
    <TouchableOpacity
      style={styles.touchable1}
      onPress={() => {
        navigation.navigate('ProductsCategories', item);
      }}>
      <Image
        style={styles.imgItem}
        source={{uri: `${serverUrl}${photo}`}}
        alt="item.photo"
      />
      <Text style={styles.itemTitle}>{name}</Text>
    </TouchableOpacity>
  );
};

//popular list component
export const RenderItem2 = ({item, index}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {name, incart, counter, price, photo} = item.product;

  return (
    <View style={styles.itemContainer2}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Products', item.product);
        }}>
        <Image style={styles.imgItem2} source={{uri: `${serverUrl}${photo}`}} />
      </TouchableOpacity>
      <View style={styles.itemview2}>
        <Text style={styles.itemTitle2}>{name}</Text>
        <Text style={styles.price}>Sales for: {price}$</Text>
        <TouchableOpacity
          style={styles.addbtn}
          onPress={() => {
            incart
              ? navigation.navigate('Cart')
              : dispatch(addToCart(item.product));
          }}>
          {incart ? (
            <Text style={styles.txAddBtn}>
              {counter} in
              <Icon name="shopping-cart" size={12} style={styles.icon} />
            </Text>
          ) : (
            <Text style={styles.txAddBtn}>
              Add to cart{' '}
              <Icon name="shopping-cart" size={12} style={styles.icon} />
            </Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};
