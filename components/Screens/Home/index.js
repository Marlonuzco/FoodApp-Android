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
import ImgBg1 from '../../../src/images/fondo2.jpeg';

import styles from './styles';

const renderItem = ({navigation, item}) => (
  <View style={styles.itemContainer}>
    <TouchableOpacity style={styles.touchable1}>
      <Image style={styles.imgItem} source={item.photo} />
      <Text style={styles.itemTitle}>{item.name}</Text>
    </TouchableOpacity>
  </View>
);

function HomeSreen({navigation}) {
  return (
    <ScrollView style={styles.scrollview}>
      <View styles={styles.container1}>
        <View style={styles.container2}>
          <View style={styles.container3}>
            <TouchableOpacity style={styles.touchable2}>
              {renderIcon1()}
            </TouchableOpacity>
            <Text style={styles.title}>Menú</Text>
            <TouchableOpacity>
              <Image style={styles.img2} source={icon1} />
            </TouchableOpacity>
          </View>
          <View style={styles.container3}>
            <TextInput
              style={styles.input}
              placeholder={'Search'}
              autoCapitalize="none"
            />
            <TouchableOpacity>{renderIconsearch()}</TouchableOpacity>
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
      </View>
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
