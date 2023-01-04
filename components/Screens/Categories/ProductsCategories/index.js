import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import {Products} from '../../../../utils/getUser';
import {renderIconsearch} from '../../Home/index';

import styles from './styles';

const RenderItem = ({item, navigation, route}) => (
  <TouchableOpacity
    onPress={() => {
      navigation.navigate('Products', item);
    }}>
    <View style={styles.itemContainer}>
      <Image style={styles.imgItem} source={item.photo} />
      <Text style={styles.itemTitle}>{item.name}</Text>
    </View>
  </TouchableOpacity>
);

function ProductsCategories({route, navigation}) {
  return (
    <>
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
    </>
  );
}

export default ProductsCategories;
