import React from 'react';
import {useSelector} from 'react-redux';
import {View, Text, ActivityIndicator} from 'react-native';

import {bgColor3} from '../../../../../utils/GlobalStyles';
import styles from './styles';

function RenderEmptyComp() {
  const {isSearching, error} = useSelector(store => store.products);
  return (
    <View style={styles.view0}>
      {isSearching && <ActivityIndicator size={30} color={bgColor3} />}
      {error && <Text>Error, data not found</Text>}
      {!isSearching && !error && <Text>No error , data not found</Text>}
    </View>
  );
}

export default RenderEmptyComp;
