import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const routes = [
  {
    key: 1,
    label: 'Account',
    routeName: 'AccountScreen',
  },
  {
    key: 2,
    label: 'Languages',
    routeName: 'LanguagesScreen',
  },
  {
    key: 3,
    label: 'Themes',
    routeName: 'ThemesScreen',
  },
  {
    key: 4,
    label: 'Terms and conditions',
    routeName: 'TermsScreen',
  },
  {
    key: 5,
    label: 'About of the app',
    routeName: 'AboutScreen',
  },
];

const RenderItem = ({data}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.renderItem}
      onPress={() => {
        navigation.navigate(data.routeName);
      }}>
      <Text style={styles.renderItemText}>{data.label}</Text>
    </TouchableOpacity>
  );
};

function SettingScreen() {
  return (
    <View style={styles.firstView}>
      {routes.map(elem => (
        <RenderItem key={elem.key} data={elem} />
      ))}
    </View>
  );
}

export default SettingScreen;
