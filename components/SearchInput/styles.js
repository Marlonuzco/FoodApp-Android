import {StyleSheet} from 'react-native';
import {bgColor4} from '../../utils/GlobalStyles';

const styles = StyleSheet.create({
  inputView: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
  },
  inputStyle: {
    width: '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15,
  },
  SearchBtn: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor4,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
});

export default styles;
