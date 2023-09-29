import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {addToCart} from '../../../../redux/actions/cart';

import ButtonComp from '../../../Button/index';
import img1 from '../../../../src/images/fondo5.jpeg';
import styles from './styles';
import {serverUrl} from '../../../../axios';

const HeaderRight = ({}) => {
  return (
    <TouchableOpacity style={styles.FavoriteBTN}>
      <Icon name="heart" color={'white'} size={30} />
    </TouchableOpacity>
  );
};

function Products({navigation, route}) {
  const dispatch = useDispatch();
  const [data, setData] = useState(route.params);
  const {products} = useSelector(store => store.cart);

  const handleInCart = () => {
    const findProduct = products.find(product => product.id === data.id);
    if (findProduct) {
      const updateData = {...findProduct};
      updateData.incart = true;
      setData(updateData);
    }
  };

  useEffect(() => {
    handleInCart();

    navigation.setOptions({
      title: data.name,
      headerRight: () => <HeaderRight />,
    });
  }, [data.name, products]);

  return (
    <ImageBackground source={img1} style={styles.background}>
      <View style={styles.container1}>
        {/*  <Text style={styles.title}>{data.name}</Text> */}
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
