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
  returnInitialState,
} from '../../../redux/actions/cart';
import {addOrder} from '../../../redux/actions/backOrders';

import ImgBg1 from '../../../src/images/fondo3.jpeg';
import {setInCartFalse} from '../../../redux/actions/products';
import styles from './styles';

const RenderItem = ({item, index, dispatch}) => {
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
                if (item.counter === 1) {
                  return (
                    dispatch(removeFromCart(item.id)),
                    dispatch(setInCartFalse(item.id))
                  );
                } else {
                  return (
                    dispatch(decrementCount(index)),
                    dispatch(decrementTotalPrice(index))
                  );
                }
              }}>
              <Text style={styles.tx1}>-</Text>
            </TouchableOpacity>
            <Text style={styles.tx2}>{item.counter}</Text>
            <TouchableOpacity
              style={styles.btn1}
              onPress={() => {
                dispatch(incrementCount(index));
                dispatch(incremenTotalPrice(index));
              }}>
              <Text style={styles.tx1}>+</Text>
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
          dispatch(setInCartFalse(item.id));
        }}
        style={styles.iconTrash}>
        {renderTrashIcon()}
      </TouchableOpacity>
    </View>
  );
};

const NoItemsInCart = ({navigation}) => {
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
};

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
          ListEmptyComponent={<NoItemsInCart navigation={navigation} />}
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
          dispatch(addOrder(cart.products));
          dispatch(returnInitialState());
        }}>
        <Text style={styles.tx6}>Pay Total</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default connect(store => ({
  cart: store.cart,
}))(CartScreen);

export function renderTrashIcon() {
  return <Icon name={'trash'} size={30} style={styles.renderIconTrash} />;
}
