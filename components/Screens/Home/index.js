import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {search_categories_and_populars} from '../../../redux/actions/products';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import ButtonComp from '../../Button/index';
import icon1 from '../../../src/images/iconos/icon2.png';
import ImgBg1 from '../../../src/images/fondo3.jpeg';
import Delivery from '../../../src/images/Delivery.png';
import {RenderItem, RenderItem2} from './components/RenderItem/index';
import RenderEmptyComp from './components/RenderEmptyComp/index';

import styles from './styles';

function HomeSreen({navigation}) {
  const dispatch = useDispatch();
  const [retry, setRetry] = useState(false);
  const {token} = useSelector(store => store.auth);
  const {categories, populars, error} = useSelector(store => store.products);

  useEffect(() => {
    const getCategoriesAndPopulars = () => {
      dispatch(search_categories_and_populars(token));
    };
    getCategoriesAndPopulars();
    setRetry(false);
  }, [dispatch, token, retry]);
  return (
    <ImageBackground style={styles.background} source={ImgBg1}>
      <ScrollView>
        <View style={styles.container1}>
          <View style={styles.container2}>
            <Image style={styles.img2} source={icon1} />
            <ButtonComp
              onPress={() => {
                navigation.navigate('Categories');
              }}
              title={'Search products'}
              TitleStyle={styles.SearchBtnTitle}
              BtnStyle={styles.SearchBtnScreen}
              children={<Icon name="search" size={15} color={'black'} />}
            />
          </View>
          {/* Aquí va el searchInput */}
          <View style={styles.container5}>
            <Image source={Delivery} style={styles.imgDelivey} />
            <View style={styles.container6}>
              <Text style={styles.tx2}>Promotions</Text>
              <Text style={styles.tx3}>¡Free Deliverys of 01/01 to 01/02!</Text>
            </View>
          </View>
        </View>
        <View>
          {/*Categories list*/}
          <Text style={styles.title2}>Categories</Text>
          <View style={styles.viewCategories}>
            <FlatList
              ListEmptyComponent={<RenderEmptyComp />}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              data={categories}
              keyExtractor={item => item.id}
              renderItem={item => <RenderItem item={item} />}
            />
          </View>
        </View>
        {/*Popular list*/}
        <Text style={styles.title2}>Popular</Text>
        <View style={styles.container4}>
          <FlatList
            ListEmptyComponent={<RenderEmptyComp />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={populars}
            keyExtractor={item => item.id}
            renderItem={item => (
              <RenderItem2 item={item.item} index={item.index} />
            )}
            showsVerticalScrollIndicator={false}
          />
          {error && (
            <View style={styles.dataErrorView}>
              <Text style={styles.dataErrorText}>
                Verifique su conexión a internet
              </Text>
              <ButtonComp
                onPress={() => {
                  setRetry(true);
                }}
                title={'Retry'}
                TitleStyle={styles.retryBtnTitle}
                BtnStyle={styles.retryBtn}
                children={
                  <MaterialCommunityIcons
                    name="cached"
                    size={20}
                    color={'black'}
                  />
                }
              />
            </View>
          )}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default HomeSreen;
