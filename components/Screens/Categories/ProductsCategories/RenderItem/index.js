import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {
  View,
  Text,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {serverUrl} from '../../../../../axios';
import ButtonComp from '../../../../Button/index';
import {bgColor3, bgColor4} from '../../../../../utils/GlobalStyles';
import styles from './styles';

export const RenderItem = ({item}) => {
  const navigation = useNavigation();
  const {name, photo, price} = item.item;
  return (
    <TouchableOpacity
      style={styles.RenderItem}
      onPress={() => {
        navigation.navigate('Products', item.item);
      }}>
      <Image
        source={{uri: `${serverUrl}${photo}`}}
        alt="ImageSource"
        style={styles.RenderItemImage}
      />
      <Text style={styles.title}>{name}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceTitle}>Price :</Text>
        <Text style={styles.price}>{price} $</Text>
      </View>
    </TouchableOpacity>
  );
};

export const RenderEmptyComp = ({retry}) => {
  const {isSearchingProducts, errorSearchProducts} = useSelector(
    store => store.products,
  );
  return (
    <>
      {isSearchingProducts && (
        <View style={styles.ActivityIndicatorView}>
          <ActivityIndicator size={50} color={bgColor3} />
        </View>
      )}
      {errorSearchProducts && (
        <View style={styles.RenderEmptyComp}>
          <Text style={styles.RenderEmptyCompTitle}>
            No se encontraron los datos
          </Text>
          <Text style={styles.RenderEmptyCompTitle}>Verifique su conexión</Text>
          <MaterialCommunityIcons
            name="wifi-strength-1-alert"
            color={bgColor4}
            size={30}
          />
          <ButtonComp
            onPress={() => {
              retry();
            }}
            title={'Retry'}
            BtnStyle={styles.RetryBtn}
            TitleStyle={styles.RetryBtnTitle}
            children={
              <MaterialCommunityIcons name="cached" size={20} color={'black'} />
            }
          />
        </View>
      )}
    </>
  );
};
