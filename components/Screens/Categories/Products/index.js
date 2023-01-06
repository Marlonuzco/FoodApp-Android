import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import {addToCart} from '../../../../redux/actions/cart';
import {
  addToFavorites,
  removeOneToFavorites,
} from '../../../../redux/actions/favorites';
import {
  setInfavorites,
  deleteTofavorites,
  setInCart,
} from '../../../../redux/actions/products';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';

function Products({navigation, route, favorites}) {
  const [inFavorites, setInFavorites] = useState(route.params.inFavorites);
  const [inCart2, setInCart2] = useState(route.params.inCart);
  const dispatch = useDispatch();
  return (
    <ScrollView style={styles.container1}>
      <View style={styles.container3}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => {
            navigation.goBack();
          }}>
          <Text style={styles.tx4}>{renderIcon()}</Text>
        </TouchableOpacity>
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
              <Text>REMOVE</Text>
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
              <Text>ADD</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      <View style={styles.container2}>
        <Text style={styles.title}>{route.params.name}</Text>
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
              setInCart2(!inCart2);
            }}>
            <Text style={styles.txBtn}>Add to cart {renderIcon2()}</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

function renderIcon() {
  return <Icon name="arrow-left" size={30} style={styles.icon} />;
}
function renderIcon2() {
  return <Icon name="shopping-cart" size={25} style={styles.icon} />;
}
function renderIcon3(inFavorites) {
  if (inFavorites === true) {
    return <Icon name="heart" size={35} solid={true} color={'red'} />;
  } else {
    return <Icon name="heart" size={35} solid={false} color={'black'} />;
  }
}

export default connect(store => ({
  favorites: store.favorites,
}))(Products);
