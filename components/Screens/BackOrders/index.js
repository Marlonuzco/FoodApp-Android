import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {
  Text,
  FlatList,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  deleteOrder,
  decremenTotalOrders,
} from '../../../redux/actions/backOrders';

import ImgBg1 from '../../../src/images/fondo3.jpeg';
import orderIcon from '../../../src/images/iconos/orderIcon.png';
import styles from './styles';

const RenderItem = ({item, index, navigation, dispatch}) => {
  const showAlert = () =>
    Alert.alert(
      '¿Are you sure you want to delete and cancel this order?',
      'If you are sure press ok',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Ok',
          onPress: () =>
            dispatch(deleteOrder(index)) && dispatch(decremenTotalOrders()),
        },
      ],
    );
  return (
    <View>
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
      <TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            showAlert();
          }}>
          <Icon name="trash" size={35} style={styles.trashIcon} />
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
};

const NoOrders = () => {
  return <Text style={styles.title2}>No orders on hold</Text>;
};

function OrdersScreen({backOrders, navigation}) {
  const dispatch = useDispatch();
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <Text style={styles.title}>Orders</Text>
      <View style={styles.container3}>
        <FlatList
          ListEmptyComponent={<NoOrders />}
          data={backOrders.orders}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem
              navigation={navigation}
              item={item.item}
              index={item.index}
              dispatch={dispatch}
            />
          )}
        />
      </View>
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
