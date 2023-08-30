import React from 'react';
import {useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {serverUrl} from '../../../../../axios';

import styles from './styles';

//categories list component
export const RenderItem = ({item, navigation}) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.touchable1}
        onPress={() => {
          navigation.navigate('ProductsCategories', item);
        }}>
        <Image
          style={styles.imgItem}
          source={{uri: `${serverUrl}${item.photo}`}}
          alt="item.photo"
        />
        <Text style={styles.itemTitle}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

//popular list component
export const RenderItem2 = ({item}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer2}>
      <TouchableOpacity
      /* onPress={() => {
          navigation.navigate('Products', item);
        }} */
      >
        <Image style={styles.imgItem2} source={item.photo} />
      </TouchableOpacity>
      <View style={styles.itemview2}>
        <Text style={styles.itemTitle2}>{item.name}</Text>
        <Text style={styles.price}>Sales for: {item.price}$</Text>
        {item.inCart ? (
          <TouchableOpacity
            style={styles.addbtn}
            /*  onPress={() => {
              navigation.navigate('Cart');
            }} */
          >
            <Text style={styles.txAddBtn}>
              {item.counter} in
              <Icon name="shopping-cart" size={12} style={styles.icon} />
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.addbtn}>
            <Text style={styles.txAddBtn}>
              Add to cart{' '}
              <Icon name="shopping-cart" size={12} style={styles.icon} />
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
