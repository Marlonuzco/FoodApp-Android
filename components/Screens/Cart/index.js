import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  incrementCount,
  decrementCount,
  incremenTotalPrice,
  decrementTotalPrice,
  removeFromCart,
  decrementTotalItems,
} from '../../../redux/actions/cart';
import {addOrder, incremenTotalOrders} from '../../../redux/actions/backOrders';

import RenderItem from './RenderItem';
import RenderEmptyComp from './RenderEmptyComp';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import styles from './styles';

function CartScreen({cart, navigation}) {
  const dispatch = useDispatch();

  const values = cart.products.map(i => i.totalPrice);
  const initialValues = 0;
  const sumWithInitial = values.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValues,
  );

  const Delivery = 5;
  const TotalToPay = () => {
    if (sumWithInitial < 1) {
      return initialValues;
    } else {
      return sumWithInitial + Delivery;
    }
  };

  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <View style={styles.view1}>
        <Text style={styles.title}>My cart</Text>
        <FlatList
          ListEmptyComponent={<RenderEmptyComp />}
          data={cart.products}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem
              navigation={navigation}
              item={item.item}
              index={item.index}
              dispatch={dispatch}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Total items : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {sumWithInitial}</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Delivery Services : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {Delivery}</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Total to pay : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {TotalToPay()}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.btnPay}
        onPress={() => {
          cart.products.length > 0 && dispatch();
        }}>
        <Text style={styles.tx6}>Pay Total</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default connect(store => ({
  cart: store.cart,
}))(CartScreen);
