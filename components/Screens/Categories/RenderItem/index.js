import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonComp from '../../../Button/index';
import {serverUrl} from '../../../../axios';
import styles from './styles';
import {bgColor3, bgColor4} from '../../../../utils/GlobalStyles';

export const RenderItem = ({item}) => {
  const navigation = useNavigation();
  const {name, photo} = item.item;
  return (
    <TouchableOpacity
      style={styles.RenderItem}
      onPress={() => {
        navigation.navigate('ProductsCategories', item);
      }}>
      <Image
        source={{uri: `${serverUrl}${photo}`}}
        alt="Image"
        style={styles.RenderItemImage}
      />
      <Text style={styles.title}>{name}</Text>
    </TouchableOpacity>
  );
};

export const RenderEmptyComp = ({retry}) => {
  const {isSearching, error} = useSelector(store => store.products);
  return (
    <>
      {isSearching && (
        <View style={styles.ActivityIndicatorView}>
          <ActivityIndicator size={50} color={bgColor3} />
        </View>
      )}
      {error && (
        <View style={styles.RenderEmptyComp}>
          <Text style={styles.RenderEmptyCompTitle}>
            No se encontraron los datos
          </Text>
          <Text style={styles.RenderEmptyCompTitle}>Verifique su conexión</Text>
          <MaterialCommunityIcons
            name="wifi-strength-1-alert"
            color={bgColor4}
            size={30}
            s
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
