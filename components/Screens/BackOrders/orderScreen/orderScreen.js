import React from 'react';
import {View, Text, Image, ScrollView, ImageBackground} from 'react-native';

import ImgBg1 from '../../../../src/images/fondo3.jpeg';
import styles from './styles';

function OrderScreen({route}) {
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <View style={styles.container0}>
        <Text style={styles.title}>Order</Text>
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
      </View>
    </ImageBackground>
  );
}
export default OrderScreen;
