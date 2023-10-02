import {StyleSheet} from 'react-native';
import {bgColor1, bgColor3} from '../../../../../utils/GlobalStyles';

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
  title: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    textAlign: 'center',
    width: '40%',
    marginRight: '5%',
  },
  RenderItemImage: {
    height: '85%',
    width: '30%',
    marginRight: '5%',
  },
  priceContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceTitle: {
    color: 'white',
    fontSize: 13,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 10,
    textAlign: 'center',
  },
  price: {
    color: bgColor3,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  ActivityIndicatorView: {
    marginTop: 250,
  },
  RenderEmptyCompTitle: {
    color: 'white',
    margin: 10,
    textAlign: 'center',
    fontSize: 15,
  },
  RenderEmptyComp: {
    marginTop: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  RetryBtn: {
    flexDirection: 'row',
    margin: 25,
    height: 50,
    width: 100,
  },
  RetryBtnTitle: {
    fontSize: 15,
    marginRight: 5,
  },
});

export default styles;
