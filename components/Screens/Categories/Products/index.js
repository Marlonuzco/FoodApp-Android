import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addToCart} from '../../../../redux/actions/cart';
import {
  tryToAddToFavorites,
  tryToRemoveOneFromFavorites,
} from '../../../../redux/actions/favorites';
import {serverUrl} from '../../../../axios';

import ButtonComp from '../../../Button/index';
import img1 from '../../../../src/images/fondo5.jpeg';
import {bgColor3} from '../../../../utils/GlobalStyles';
import styles from './styles';

const HeaderRight = ({dispatch, data, isFavorite}) => {
  const auth = useSelector(store => store.auth);
  const {sendingData} = useSelector(store => store.favorites);
  const {id} = auth.userInfo;
  const {token} = auth;
  const valuesToSend = {user_id: id, product_id: data.id, product: data};
  return (
    <>
      {sendingData ? (
        <ActivityIndicator
          size={30}
          color={bgColor3}
          style={styles.FavoriteBTN}
        />
      ) : (
        <>
          {isFavorite ? (
            <TouchableOpacity
              onPress={() => {
                dispatch(tryToRemoveOneFromFavorites(valuesToSend, token));
              }}
              style={styles.FavoriteBTN}>
              <Icon name="heart" color={'red'} size={30} solid />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => {
                dispatch(tryToAddToFavorites(valuesToSend, token));
              }}
              style={styles.FavoriteBTN}>
              <Icon name="heart" color={'white'} size={30} />
            </TouchableOpacity>
          )}
        </>
      )}
    </>
  );
};

function Products({navigation, route}) {
  const dispatch = useDispatch();
  const [data, setData] = useState(route.params);
  const [isFavorite, setIsFavorite] = useState(false);
  const {products} = useSelector(store => store.cart);
  const {items} = useSelector(store => store.favorites);

  const handleInCart = () => {
    const findProduct = products.find(product => product.id === data.id);
    if (findProduct) {
      const updateData = {...findProduct};
      updateData.incart = true;
      setData(updateData);
    }
  };

  const handleInFavorites = () => {
    const findProduct = items.some(product => product.id === data.id);
    if (findProduct) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  useEffect(() => {
    navigation.setOptions({
      title: data.name,
      headerRight: () => (
        <HeaderRight data={data} isFavorite={isFavorite} dispatch={dispatch} />
      ),
    });

    handleInCart();
    handleInFavorites();
  }, [data.name, products, items, isFavorite]);
  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.container1}>
        <Image
          source={{uri: `${serverUrl}${data.photo}`}}
          alt="ImageSource"
          style={styles.Image}
        />
        <Text style={styles.descriptionTitle}>Description: </Text>
        <Text style={styles.description}>{data.description}</Text>
        <Text style={styles.priceTitle}>Price for each unit :</Text>
        <Text style={[styles.priceTitle, {fontWeight: 'bold', fontSize: 25}]}>
          {data.price.toFixed(2)} $
        </Text>
        {data.incart ? (
          <ButtonComp
            onPress={() => navigation.navigate('Cart')}
            title={`${data.counter} in cart`}
            TitleStyle={styles.addBtnTitle}
            BtnStyle={styles.addBtn}
            children={<Icon name="shopping-cart" size={15} color={'white'} />}
          />
        ) : (
          <ButtonComp
            onPress={() => {
              dispatch(addToCart(data));
              handleInCart();
            }}
            title={'Add to cart'}
            TitleStyle={styles.addBtnTitle}
            BtnStyle={styles.addBtn}
            children={<Icon name="shopping-cart" size={15} color={'white'} />}
          />
        )}
      </View>
    </ImageBackground>
  );
}

export default Products;
