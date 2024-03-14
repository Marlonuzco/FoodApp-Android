import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, ImageBackground} from 'react-native';

import {RenderItem, RenderEmptyComp} from './RenderItem';
import SearchInput from '../../../SearchInput/index';
import img1 from '../../../../src/images/fondo5.jpeg';
import styles from './styles';
import {search_products} from '../../../../redux/actions/products';

const HeaderRight = () => {
  return <SearchInput setInputStyle={styles.SearchInput} />;
};

function ProductsCategories({route, navigation}) {
  const dispatch = useDispatch();
  const [retry, setRetry] = useState(false);
  const {token} = useSelector(store => store.auth);
  const {products} = useSelector(store => store.products);
  const {name, id} = route.params;

  useEffect(() => {
    const fetchProducts = () => {
      dispatch(search_products(id, token));
    };
    navigation.setOptions({
      title: name,
      headerRight: () => <HeaderRight />,
    });
    fetchProducts();
    setRetry(false);
  }, [token, id, retry, name]);

  console.log('route.params', route.params);
  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.productsContainer}>
        <FlatList
          ListEmptyComponent={
            <RenderEmptyComp
              retry={() => {
                setRetry(true);
              }}
            />
          }
          data={products}
          keyExtractor={(item, key) => key}
          renderItem={item => <RenderItem item={item} />}
        />
      </View>
    </ImageBackground>
  );
}

export default ProductsCategories;
