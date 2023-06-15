import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ButtomComp = ({title, children, onPress, BtnStyle, TitleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Buttom, BtnStyle]}>
      {title && <Text style={[styles.Text, TitleStyle]}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default ButtomComp;
