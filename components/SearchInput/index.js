import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import styles from './styles';
import {bgColor3} from '../../utils/GlobalStyles';

const SearchInput = ({value, onChangeText, placeHolder, setInputStyle}) => {
  const [onFocus, setOnFocus] = useState(false);
  return (
    <View
      style={[
        styles.inputView,
        setInputStyle,
        onFocus && {borderWidth: 1.5, borderColor: bgColor3},
      ]}>
      <TextInput
        style={styles.inputStyle}
        value={value}
        onChangeText={onChangeText}
        inputMode={'search'}
        enterKeyHint={'search'}
        placeholder={placeHolder || 'Search . . .'}
        onFocus={() => {
          setOnFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
        }}
      />
      <TouchableOpacity style={styles.SearchBtn}>
        <Icon name="search" size={15} color={'black'} />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
