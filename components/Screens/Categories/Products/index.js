import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {
  addToFavorites,
  removeOneToFavorites,
} from '../../../../redux/actions/favorites';
import {
  setInfavorites,
  deleteTofavorites,
  setInCart,
} from '../../../../redux/actions/products';
import {addToCart, incrementTotalItems} from '../../../../redux/actions/cart';
import Icon from 'react-native-vector-icons/FontAwesome5';

import img1 from '../../../../src/images/fondo5.jpeg';
import styles from './styles';

function Products({navigation, route}) {
  const [inFavorites, setInFavorites] = useState(route.params.inFavorites);
  const [inCart2, setInCart2] = useState(route.params.inCart);
  const dispatch = useDispatch();
  return (
    <ImageBackground source={img1} style={styles.background}>
      <ScrollView style={styles.container1}>
        <View style={styles.container3}>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={styles.tx4}>{renderIcon()}</Text>
          </TouchableOpacity>
          <Text style={styles.title}>{route.params.name}</Text>
          {inFavorites ? (
            <>
              <TouchableOpacity
                style={styles.btn3}
                onPress={() => {
                  dispatch(removeOneToFavorites(route.params.id));
                  dispatch(deleteTofavorites(route.params.id));
                  setInFavorites(!inFavorites);
                }}>
                {renderIcon3(inFavorites)}
              </TouchableOpacity>
            </>
          ) : (
            <>
              <TouchableOpacity
                style={styles.btn3}
                onPress={() => {
                  dispatch(addToFavorites(route.params));
                  dispatch(setInfavorites(route.params.id));
                  setInFavorites(!inFavorites);
                }}>
                {renderIcon3(inFavorites)}
              </TouchableOpacity>
            </>
          )}
        </View>

        <View style={styles.container2}>
          <Image source={route.params.photo} style={styles.img} />
          <Text style={styles.tx2}>Description</Text>
          <Text style={styles.tx2}>{route.params.description}</Text>
          <Text style={styles.tx3}>Sales for: {route.params.price}$</Text>
          {inCart2 ? (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                navigation.navigate('Cart');
                setInCart2(!inCart2);
              }}>
              <Text style={styles.txBtn}>
                {route.params.counter} in {renderIcon2()}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.addBtn}
              onPress={() => {
                dispatch(addToCart(route.params));
                dispatch(setInCart(route.params.id));
                dispatch(incrementTotalItems());
                setInCart2(!inCart2);
              }}>
              <Text style={styles.txBtn}>Add to cart {renderIcon2()}</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export function renderIcon() {
  return <Icon name="arrow-left" size={30} style={styles.icon} />;
}
function renderIcon2() {
  return <Icon name="shopping-cart" size={25} style={styles.icon} />;
}
function renderIcon3(inFavorites) {
  if (inFavorites === true) {
    return <Icon name="heart" size={35} solid={true} color={'red'} />;
  } else {
    return <Icon name="heart" size={35} solid={false} color={'white'} />;
  }
}

export default connect(store => ({
  favorites: store.favorites,
}))(Products);
