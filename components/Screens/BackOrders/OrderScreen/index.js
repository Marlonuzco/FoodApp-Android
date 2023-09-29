import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {serverUrl} from '../../../../axios';

import ImgBg1 from '../../../../src/images/fondo5.jpeg';
import {bgColor3} from '../../../../utils/GlobalStyles';
import styles from './styles';

const HeaderRight = () => {
  return (
    <TouchableOpacity style={styles.deleteBtn}>
      <Icon name="trash" color={bgColor3} size={30} />
    </TouchableOpacity>
  );
};

const RenderItem = ({item}) => {
  return (
    <View key={item.id} style={styles.container1}>
      <View style={styles.container2}>
        <Image
          source={{uri: `${serverUrl}${item.photo}`}}
          style={styles.photo}
        />
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
        <Text style={styles.tx4}>{item.price.toFixed(2)} $</Text>
        <Text style={styles.tx3}>Total Price</Text>
        <Text style={styles.tx4}>{item.total_price.toFixed(2)} $</Text>
      </View>
    </View>
  );
};

function OrderScreen({navigation, route}) {
  const values = route.params.map(i => i.total_price);
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

  useEffect(() => {
    navigation.setOptions({
      title: 'Order',
      headerRight: () => <HeaderRight />,
    });
  }, [route.params]);
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <View style={styles.container0}>
        <ScrollView style={styles.scrollview}>
          {route.params.map(item => (
            <RenderItem item={item} />
          ))}
        </ScrollView>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>Total items : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {sumWithInitial.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>Delivery Services : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {Delivery.toFixed(2)}</Text>
          </View>
        </View>
        <View style={styles.container5}>
          <View style={styles.container6}>
            <Text style={styles.tx8}>Total to pay : </Text>
          </View>
          <View style={styles.container7}>
            <Text style={styles.tx7}>$ {TotalToPay().toFixed(2)}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
export default OrderScreen;
