import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, ImageBackground} from 'react-native';
import {search_categories_and_populars} from '../../../redux/actions/products';

import {RenderItem, RenderEmptyComp} from './RenderItem/index';
import SearchInput from '../../SearchInput';
import img1 from '../../../src/images/fondo5.jpeg';
import styles from './styles';

const HeaderRight = ({onChangeText}) => {
  return (
    <SearchInput
      onChangeText={onChangeText}
      setInputStyle={styles.SearchInput}
    />
  );
};

function CategoriesSreen({navigation}) {
  const dispatch = useDispatch();
  const {token} = useSelector(store => store.auth);
  const {categories} = useSelector(store => store.products);
  const [data, setData] = useState(categories);
  const [retry, setRetry] = useState(false);
  const [search, setSearch] = useState('');

  const onChangeSearch = values => {
    setSearch(values);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <HeaderRight onChangeText={onChangeSearch} />,
    });
  }, [navigation]);

  useEffect(() => {
    const fetchCategoriesAndPopular = () => {
      if (categories.length < 0) {
        dispatch(search_categories_and_populars(token));
      }
    };
    fetchCategoriesAndPopular();
    setRetry(false);
  }, [dispatch, token, categories, retry]);

  useEffect(() => {
    const filterData = () => {
      let newDataFilteres = categories.filter(dataValue => {
        return dataValue.name.toLowerCase().includes(search.toLowerCase());
      });
      setData(newDataFilteres);
    };

    filterData();
  }, [search, categories]);

  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.CategoriesContainer}>
        <FlatList
          data={data}
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
