import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {serverUrl} from '../../../../axios';

import {bgColor3} from '../../../../utils/GlobalStyles';
import styles from './styles';

export const RenderItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Products', item)}
      style={styles.container1}>
      <View style={styles.renderItem}>
        <View style={styles.container2}>
          <Image
            style={styles.photo}
            source={{uri: `${serverUrl}${item.photo}`}}
          />
        </View>
        <View style={styles.container2}>
          <Text style={styles.title2}>{item.name}</Text>
        </View>
        <View style={styles.container2}>
          <Text style={styles.tx3}>Sales for :</Text>
          <Text style={styles.tx4}>{item.price} $</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const RenderEmptyComp = () => {
  const {searchingData, error} = useSelector(store => store.favorites);
  return (
    <View style={styles.RenderEmptyComp}>
      {searchingData && <ActivityIndicator color={bgColor3} size={35} />}
      {error && <Text style={styles.errorText}>Error data not found</Text>}
      {!searchingData && !error && (
        <Text style={styles.title3}>No items in favorites</Text>
      )}
    </View>
  );
};
