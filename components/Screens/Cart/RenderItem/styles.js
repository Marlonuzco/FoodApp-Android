import {StyleSheet} from 'react-native';
import {
  bgColor1,
  bgColor3,
  bgColor4,
  bgColor5,
} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  RenderItem: {
    backgroundColor: bgColor1,
    borderRadius: 15,
    height: 120,
    width: 360,
    margin: 15,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  RenderItemView: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  name: {
    color: 'white',
    textAlign: 'center',
    width: '90%',
    fontSize: 12,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  image: {
    height: '55%',
    width: '20%',
    margin: 20,
  },
  priceTitle: {
    color: bgColor3,
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
    marginBottom: 5,
  },
  RenderItemViewCounter: {
    width: '100%',
    height: '70%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  counterBtn: {
    width: 30,
    height: 40,
    margin: 10,
    backgroundColor: bgColor3,
  },
  counterBtnTitle: {
    fontSize: 18,
  },
  counter: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  RenderItemViewTrash: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
  },
});

export default styles;
