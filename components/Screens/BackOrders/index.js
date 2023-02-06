import React from 'react';
import {connect} from 'react-redux';
import {Text, FlatList, View} from 'react-native';

import styles from './styles';

const RenderItem = ({item, index}) => {
  console.log('Ordersitem', item);
  return (
    <View style={styles.renderItem}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text>{item.counter}</Text>
    </View>
  );
};

const NoOrders = () => {
  return <Text style={styles.title2}>No orders on hold</Text>;
};

function OrdersScreen({backOrders, navigation}) {
  return (
    <>
      <Text style={styles.title}>Orders</Text>
      <FlatList
        ListEmptyComponent={<NoOrders />}
        data={backOrders.orders}
        keyExtractor={item => item.id}
        renderItem={item => (
          <RenderItem
            navigation={navigation}
            item={item.item}
            index={item.index}
          />
        )}
      />
    </>
  );
}
export default connect(store => ({
  backOrders: store.backOrders,
}))(OrdersScreen);
