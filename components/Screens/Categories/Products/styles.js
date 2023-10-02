import {StyleSheet} from 'react-native';

import {bgColor1, bgColor3, bgColor5} from '../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container1: {
    flex: 1,
    backgroundColor: bgColor1,
    alignItems: 'center',
    padding: 10,
  },
  FavoriteBTN: {
    marginRight: 10,
  },
  Image: {
    height: 215,
    width: '70%',
    marginTop: '35%',
    marginBottom: '10%',
  },
  descriptionTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 0.5,
    marginBottom: '5%',
  },
  description: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 0.5,
    marginBottom: '15%',
    textAlign: 'center',
  },
  priceTitle: {
    color: bgColor3,
    fontSize: 15,
    letterSpacing: 0.5,
  },
  addBtn: {
    height: 40,
    width: 150,
    backgroundColor: bgColor5,
    marginTop: '10%',
    flexDirection: 'row',
  },
  addBtnTitle: {
    color: 'white',
    fontSize: 15,
    letterSpacing: 0.5,
    marginRight: 5,
  },
});

export default styles;
