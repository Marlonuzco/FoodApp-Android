import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import styles from './styles';

function ButtomComp({onPress, tittle, tittleStyle, ButtomStyle, extraComp}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.ButtomComp, ButtomStyle]}>
      <Text style={[styles.tittle, tittleStyle]}>{tittle}</Text>
      {extraComp}
    </TouchableOpacity>
  );
}

export default ButtomComp;
