import React from 'react';
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

import {Productes} from '../../../utils/getUser';
import icon1 from '../../../src/images/iconos/Icon1.png';
import Delivery from '../../../src/images/Delivery.png';

import styles from './styles';

const renderItem = ({navigation, item}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.touchable1}>
      <Image style={styles.imgItem} source={item.photo} />
      <Text style={styles.itemTitle}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

const renderItem2 = ({navigation, item}) => (
  <View style={styles.itemContainer2}>
    <Image style={styles.imgItem2} source={item.photo} />
    <View style={styles.itemview2}>
      <Text style={styles.itemTitle2}>{item.name}</Text>
      <Text style={styles.price}>Sales for: {item.price}$</Text>
      <TouchableOpacity style={styles.addbtn}>
        <Text style={styles.txAddBtn}>Add to cart +</Text>
      </TouchableOpacity>
    </View>
  </View>
);

function HomeSreen({navigation}) {
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
            <Text>¡Free Deliverys for this month!</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title2}>Categories</Text>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Productes.categories}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <Text style={styles.title2}>Popular</Text>
      <View style={styles.container4}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={Productes.Favorites}
          keyExtractor={item => item.id}
          renderItem={renderItem2}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <Text style={styles.title2}>Drinks</Text>
    </ScrollView>
  );
}

function renderIconsearch() {
  return <Icon name="search" size={25} style={styles.searchIcon} />;
}
function renderIcon1() {
  return <Icon name="outdent" size={25} color={'white'} />;
}

export default HomeSreen;
