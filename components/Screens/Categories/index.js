import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, ImageBackground} from 'react-native';
import {search_categories_and_populars} from '../../../redux/actions/products';

import {RenderItem, RenderEmptyComp} from './RenderItem/index';
import SearchInput from '../../SearchInput';
import img1 from '../../../src/images/fondo5.jpeg';
import styles from './styles';

const HeaderRight = ({}) => {
  return <SearchInput setInputStyle={styles.SearchInput} />;
};

function CategoriesSreen({navigation}) {
  const dispatch = useDispatch();
  const [retry, setRetry] = useState(false);
  const {token} = useSelector(store => store.auth);
  const {categories} = useSelector(store => store.products);

  useEffect(() => {
    const fetchCategoriesAndPopular = () => {
      if (categories.length < 0) {
        dispatch(search_categories_and_populars(token));
      }
    };
    navigation.setOptions({headerRight: () => <HeaderRight />});
    fetchCategoriesAndPopular();
    setRetry(false);
  }, [navigation, retry]);
  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.CategoriesContainer}>
        <FlatList
          data={categories}
          keyExtractor={item => item.id}
          renderItem={item => <RenderItem item={item} />}
          ListEmptyComponent={
            <RenderEmptyComp
              retry={() => {
                setRetry(true);
              }}
            />
          }
        />
      </View>
    </ImageBackground>
  );
}

export default CategoriesSreen;
