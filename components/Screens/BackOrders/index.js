import React from 'react';
import {connect} from 'react-redux';
import {
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import ImgBg1 from '../../../src/images/fondo3.jpeg';
import orderIcon from '../../../src/images/iconos/orderIcon.png';
import styles from './styles';

const RenderItem = ({item, index, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.renderItem}
      onPress={() => {
        navigation.navigate('OrderScreen', item);
      }}>
      <View style={styles.container2}>
        <Text style={styles.itemName}>Order {index + 1}</Text>
      </View>
      <View style={styles.container2}>
        <Image source={orderIcon} style={styles.photo} />
      </View>
    </TouchableOpacity>
  );
};

const NoOrders = () => {
  return <Text style={styles.title2}>No orders on hold</Text>;
};

function OrdersScreen({backOrders, navigation}) {
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        ListEmptyComponent={<NoOrders />}
        data={backOrders.orders}
        keyExtractor={item => item.id}
        renderItem={item => (
          <RenderItem
            navigation={navigation}
            item={item.item}
            index={item.index}
          />
        )}
      />
    </ImageBackground>
  );
}
export default connect(store => ({
  backOrders: store.backOrders,
}))(OrdersScreen);

function renderIconOrder() {
  return <Icon name="clipboard-list" size={30} />;
}
function renderIconClock() {
  return <Icon name="clock" size={30} />;
}
