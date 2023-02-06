import React from 'react';
import {connect, useDispatch} from 'react-redux';
import {View, Text, TouchableOpacity, FlatList, Image} from 'react-native';
import {removeOneToFavorites} from '../../../redux/actions/favorites';
import {deleteTofavorites} from '../../../redux/actions/products';

import {renderTrashIcon} from '../Cart/index';
import styles from './styles';

const RenderItem = ({item, index}) => {
  const dispatch = useDispatch();
  return (
    <>
      <View style={styles.container1}>
        <View style={styles.renderItem}>
          <View style={styles.container2}>
            <Image style={styles.photo} source={item.photo} />
          </View>
          <View style={styles.container2}>
            <Text style={styles.title2}>{item.name}</Text>
          </View>
          <View style={styles.container2}>
            <Text style={styles.tx3}>Sales for :</Text>
            <Text style={styles.tx4}>{item.price} $</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.iconTrash}
          onPress={() => {
            dispatch(removeOneToFavorites(item.id));
            dispatch(deleteTofavorites(item.id));
          }}>
          {renderTrashIcon()}
        </TouchableOpacity>
      </View>
    </>
  );
};

const NoItemsInFavorites = () => {
  return <Text style={styles.title3}>No Items in Favorites</Text>;
};

function FavoriteScreen({navigation, favorites}) {
  return (
    <>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        ListEmptyComponent={<NoItemsInFavorites />}
        data={favorites.items}
        keyExtractor={item => item.id}
        renderItem={item => (
          <RenderItem
            navigation={navigation}
            item={item.item}
            index={item.index}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
}

export default connect(store => ({
  favorites: store.favorites,
}))(FavoriteScreen);
