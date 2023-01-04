import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {
  incrementCount,
  decrementCount,
  incremenTotalPrice,
  decrementTotalPrice,
  removeFromCart,
  incremenTotalCount,
} from '../../../redux/actions/cart';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

const RenderItem = ({item, index}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.container1}>
      <View style={styles.renderItem}>
        <View style={styles.container2}>
          <Image style={styles.photo} source={item.photo} />
        </View>
        <View style={styles.container2}>
          <Text style={styles.title2}>{item.name}</Text>
          <View style={styles.container3}>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                dispatch(incrementCount(index));
                dispatch(incremenTotalPrice(index));
              }}>
              <Text style={styles.tx1}>+</Text>
            </TouchableOpacity>
            <Text style={styles.tx2}>{item.counter}</Text>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                dispatch(decrementCount(index));
                dispatch(decrementTotalPrice(index));
              }}>
              <Text style={styles.tx1}>-</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.tx3}>Price c/u</Text>
          <Text style={styles.tx4}>{item.price} $</Text>
          <Text style={styles.tx3}>Total Price</Text>
          <Text style={styles.tx4}>{item.totalPrice} $</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          dispatch(removeFromCart(item.id));
        }}
        style={styles.iconTrash}>
        {renderTrashIcon()}
      </TouchableOpacity>
    </View>
  );
};

function CartScreen({cart, navigation, totalCount}) {
  const CartView = () => {
    if (cart.products < 1) {
      return (
        <>
          <Text style={styles.title3}>No Items</Text>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              navigation.navigate('Categories');
            }}>
            <Text style={styles.tx9}>! Click here to order now ¡</Text>
          </TouchableOpacity>
        </>
      );
    } else {
      return (
        <>
          <FlatList
            data={cart.products}
            keyExtractor={item => item.id}
            renderItem={item => (
              <RenderItem
                navigation={navigation}
                item={item.item}
                index={item.index}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        </>
      );
    }
  };
  return (
    <>
      <View style={styles.view1}>
        <Text style={styles.title}>My cart</Text>
        {CartView()}
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Delivery Services : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {0}</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Total count : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {cart.totalCount}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnPay}>
        <Text style={styles.tx6}>Pay Total</Text>
      </TouchableOpacity>
    </>
  );
}

export default connect(store => ({
  cart: store.cart,
}))(CartScreen);

export function renderTrashIcon() {
  return <Icon name={'trash'} size={30} color={'black'} />;
}
