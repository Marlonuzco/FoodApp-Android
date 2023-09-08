import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

const ButtonComp = ({title, children, onPress, BtnStyle, TitleStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.Button, BtnStyle]}>
      {title && <Text style={[styles.Text, TitleStyle]}>{title}</Text>}
      {children}
    </TouchableOpacity>
  );
};

export default ButtonComp;
