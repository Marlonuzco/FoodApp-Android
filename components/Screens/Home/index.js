import React from 'react';
import {View, Text, FlatList} from 'react-native';

import {Productes} from '../../../utils/getUser';
import styles from './styles';

function HomeSreen() {
  return (
    <>
      <View>
        <Text style={styles.title}>HomeSreen</Text>
        <FlatList
          data={Productes}
          renderItem={({item}) => {
            <View style={styles.itemContainer}>
              <Text style={styles.itemTitle}>{item.name}</Text>
            </View>;
          }}
        />
      </View>
    </>
  );
}

export default HomeSreen;
