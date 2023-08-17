import React from 'react';
import {connect} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {Products} from '../../../utils/getUser';
import icon1 from '../../../src/images/iconos/icon2.png';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import Delivery from '../../../src/images/Delivery.png';
import {RenderItem, RenderItem2} from './components/RenderItem';

import styles from './styles';

function HomeSreen({navigation, data, products}) {
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <ScrollView>
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
            <TouchableOpacity>
              <Icon name="search" size={25} style={styles.searchIcon} />
            </TouchableOpacity>
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
            data={products.Popular}
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
      </ScrollView>
    </ImageBackground>
  );
}
export default connect(store => ({
  data: store.cart,
  products: store.products,
}))(HomeSreen);
