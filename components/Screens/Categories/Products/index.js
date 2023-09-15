import React, {useState, useEffect} from 'react';
import {useDispatch, connect, useSelector} from 'react-redux';
import {
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

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
  const [data, setData] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: data.name,
      headerRight: () => <HeaderRight />,
    });
    setData(route.params);
  }, [data]);

  console.log('data', data);
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
          {data.price} $
        </Text>
        <ButtonComp
          title={'Add to cart'}
          TitleStyle={styles.addBtnTitle}
          BtnStyle={styles.addBtn}
          children={<Icon name="shopping-cart" size={15} color={'white'} />}
        />
      </View>
    </ImageBackground>
  );
}

export default Products;
