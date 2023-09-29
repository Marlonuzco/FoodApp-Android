import React from 'react';
import {connect} from 'react-redux';
import {Text, FlatList, View, ImageBackground} from 'react-native';

import {RenderItem, RenderEmptyComp} from './Components';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import styles from './styles';

function OrdersScreen({backOrders}) {
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <Text style={styles.title}>Orders</Text>
      <View style={styles.container3}>
        <FlatList
          ListEmptyComponent={<RenderEmptyComp />}
          data={backOrders.orders}
          keyExtractor={item => item.id}
          renderItem={item => (
            <RenderItem item={item.item} index={item.index} />
          )}
        />
      </View>
    </ImageBackground>
  );
}
export default connect(store => ({
  backOrders: store.backOrders,
}))(OrdersScreen);
