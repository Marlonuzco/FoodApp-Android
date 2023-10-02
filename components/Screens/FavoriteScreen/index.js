import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Text, FlatList, ImageBackground} from 'react-native';
import {getUserFavorites} from '../../../redux/actions/favorites';

import {RenderItem, RenderEmptyComp} from './Components';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import styles from './styles';

function FavoriteScreen({navigation}) {
  const dispatch = useDispatch();
  const {items} = useSelector(store => store.favorites);
  const {userInfo, token} = useSelector(store => store.auth);
  const {id} = userInfo;

  useEffect(() => {
    const getData = () => {
      dispatch(getUserFavorites(id, token));
    };
    getData();
  }, []);
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <Text style={styles.title}>Favorites</Text>
      <FlatList
        ListEmptyComponent={<RenderEmptyComp />}
        data={items}
        keyExtractor={item => item.id}
        renderItem={item => <RenderItem item={item.item} index={item.index} />}
        showsVerticalScrollIndicator={false}
      />
    </ImageBackground>
  );
}

export default FavoriteScreen;
