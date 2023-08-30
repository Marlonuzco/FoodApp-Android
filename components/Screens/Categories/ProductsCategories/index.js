import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
  ImageBackground,
} from 'react-native';
/* import {Products} from '../../../../utils/getUser'; */
import {renderIconsearch} from '../../Home/index';

import img1 from '../../../../src/images/fondo5.jpeg';
import styles from './styles';

const RenderItem = ({item, navigation, route}) => (
  <TouchableOpacity
    style={styles.itemContainer}
    onPress={() => {
      navigation.navigate('Products', item);
    }}>
    <View style={styles.container3}>
      <Image style={styles.imgItem} source={item.photo} />
    </View>
    <View style={styles.container3}>
      <Text style={styles.itemTitle}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

function ProductsCategories({route, navigation}) {
  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.container1}>
        <Text style={styles.title1}>{route.params.name}</Text>
        <View style={styles.container2}>
          <TextInput
            style={styles.input}
            placeholder={'Search'}
            autoCapitalize="none"
            placeholderTextColor={'black'}
          />
          <TouchableOpacity>{renderIconsearch()}</TouchableOpacity>
        </View>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={route.params.products}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem navigation={navigation} item={item.item} />
          )}
        />
      </View>
    </ImageBackground>
  );
}

export default ProductsCategories;
