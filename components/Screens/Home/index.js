import React, {useState} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addToCart} from '../../../redux/actions/cart';
import {setInCart} from '../../../redux/actions/products';

import {Products} from '../../../utils/getUser';
import icon1 from '../../../src/images/iconos/icon2.png';
import Delivery from '../../../src/images/Delivery.png';

import styles from './styles';

//categories list component
const RenderItem = ({navigation, item}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity
      style={styles.touchable1}
      onPress={() => {
        navigation.navigate('ProductsCategories', item);
      }}>
      <Image style={styles.imgItem} source={item.photo} />
      <Text style={styles.itemTitle}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

//popular list component
const RenderItem2 = ({item, navigation, index}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.itemContainer2}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Products', item);
        }}>
        <Image style={styles.imgItem2} source={item.photo} />
      </TouchableOpacity>
      <View style={styles.itemview2}>
        <Text style={styles.itemTitle2}>{item.name}</Text>
        <Text style={styles.price}>Sales for: {item.price}$</Text>
        {item.inCart ? (
          <TouchableOpacity
            style={styles.addbtn}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Text style={styles.txAddBtn}>
              {item.counter} in {renderIcon2()}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addbtn}
            onPress={() => {
              dispatch(addToCart(item));
              dispatch(setInCart(item.id));
            }}>
            <Text style={styles.txAddBtn}>Add to cart {renderIcon2()}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

function HomeSreen({navigation, data, products}) {
  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.title}>Menú</Text>
          <TouchableOpacity style={styles.touchable2}>
            <Image style={styles.img2} source={icon1} />
          </TouchableOpacity>
        </View>
        <View style={styles.container3}>
          <TextInput
            style={styles.input}
            placeholder={'Search'}
            autoCapitalize="none"
            placeholderTextColor={'black'}
          />
          <TouchableOpacity>{renderIconsearch()}</TouchableOpacity>
        </View>
        <View style={styles.container5}>
          <Image source={Delivery} style={styles.imgDelivey} />
          <View style={styles.container6}>
            <Text style={styles.tx2}>Promotions</Text>
            <Text style={styles.tx3}>¡Free Deliverys of 01/01 to 01/02!</Text>
          </View>
        </View>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Categories');
          }}>
          <Text style={styles.title2}>Categories</Text>
        </TouchableOpacity>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Products.categories}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem navigation={navigation} item={item.item} />
          )}
        />
      </View>
      <Text style={styles.title2}>Popular</Text>
      <View style={styles.container4}>
        {/* popular list */}
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={products.Favorites}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem2
              navigation={navigation}
              item={item.item}
              data={data}
              index={item.index}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <View style={styles.container7}>
        <Text style={styles.tx4}>! Order now !</Text>
        <Text style={styles.tx4}>! Order now !</Text>
        <Text style={styles.tx4}>! Order now !</Text>
        <Text style={styles.tx4}>! Order now !</Text>
      </View>
    </ScrollView>
  );
}
export default connect(store => ({
  data: store.cart,
  products: store.products,
}))(HomeSreen);

export function renderIconsearch() {
  return <Icon name="search" size={25} style={styles.searchIcon} />;
}

function renderIcon2() {
  return <Icon name="shopping-cart" size={12} style={styles.icon} />;
}
