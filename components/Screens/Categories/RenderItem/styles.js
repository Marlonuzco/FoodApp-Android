import {StyleSheet} from 'react-native';
import {bgColor1, bgColor4} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  RenderItem: {
    backgroundColor: bgColor1,
    borderRadius: 15,
    height: 100,
    width: 300,
    margin: 15,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  RenderItemImage: {
    height: '90%',
    width: '40%',
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    width: '40%',
    marginLeft: '10%',
  },
  RenderEmptyComp: {
    width: 300,
    height: 250,
    backgroundColor: bgColor1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50%',
    borderRadius: 15,
  },
  RenderEmptyCompTitle: {
    color: bgColor4,
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
  RetryBtn: {
    backgroundColor: bgColor4,
    height: 40,
    width: 100,
    margin: 20,
    flexDirection: 'row',
  },
  RetryBtnTitle: {
    fontSize: 15,
    marginRight: '5%',
  },
  ActivityIndicatorView: {
    marginTop: 250,
  },
});

export default styles;
