import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import {addOrder} from '../../../redux/actions/backOrders';
import {cartInitialState} from '../../../redux/actions/cart';

import RenderItem from './RenderItem';
import RenderEmptyComp from './RenderEmptyComp';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import styles from './styles';
import {bgColor1} from '../../../utils/GlobalStyles';

function CartScreen({navigation}) {
  const dispatch = useDispatch();
  const {products} = useSelector(store => store.cart);

  useEffect(() => {}, [products]);

  const values = products.map(products => products.total_price);
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
        <Text style={styles.title}>Shopping Cart</Text>
        <FlatList
          ListEmptyComponent={<RenderEmptyComp />}
          data={products}
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
          <Text style={styles.tx7}>$ {sumWithInitial.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Delivery Services : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {Delivery.toFixed(2)}</Text>
        </View>
      </View>
      <View style={styles.container4}>
        <View style={styles.container5}>
          <Text style={styles.tx5}>Total to pay : </Text>
        </View>
        <View style={styles.container6}>
          <Text style={styles.tx7}>$ {TotalToPay().toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.btnPay,
          products.length === 0 && {backgroundColor: bgColor1},
        ]}
        onPress={() => {
          products.length > 0 && dispatch(addOrder(products));
          dispatch(cartInitialState());
        }}>
        <Text style={styles.tx6}>Pay Total</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default CartScreen;
