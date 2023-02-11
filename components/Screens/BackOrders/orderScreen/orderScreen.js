import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {renderIcon} from '../../Categories/Products';

import ImgBg1 from '../../../../src/images/fondo5.jpeg';
import styles from './styles';

function OrderScreen({route, navigation}) {
  const values = route.params.map(i => i.totalPrice);
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
      <View style={styles.container0}>
        <View style={styles.container4}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.goBack();
            }}>
            {renderIcon()}
          </TouchableOpacity>
          <Text style={styles.title}>Order</Text>
        </View>
        <ScrollView style={styles.scrollview}>
          {route.params.map(item => (
            <View key={item.id} style={styles.container1}>
              <View style={styles.container2}>
                <Image source={item.photo} style={styles.photo} />
              </View>
              <View style={styles.container2}>
                <Text style={styles.title2}>{item.name}</Text>
                <View style={styles.container3}>
                  <Text style={styles.tx2}>{item.counter}</Text>
                  <Text style={styles.tx5}>units</Text>
                </View>
              </View>
              <View style={styles.container2}>
                <Text style={styles.tx3}>Price c/u</Text>
                <Text style={styles.tx4}>{item.price} $</Text>
                <Text style={styles.tx3}>Total Price</Text>
                <Text style={styles.tx4}>{item.totalPrice} $</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>Total items : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {sumWithInitial}</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>Delivery Services : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {Delivery}</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>total paid : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {TotalToPay()}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default OrderScreen;
