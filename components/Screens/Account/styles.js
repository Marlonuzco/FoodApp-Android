import {StyleSheet} from 'react-native';

import {bgColor1, bgColor5} from '../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    backgroundColor: bgColor1,
    borderRadius: 12,
    flex: 1,
    margin: 30,
    padding: 10,
    flexDirection: 'column',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchable1: {
    backgroundColor: bgColor5,
    width: 110,
    height: 50,
    flexDirection: 'row',
  },
  tx1: {
    color: 'white',
    fontSize: 15,
    marginRight: '5%',
  },
  tx2: {
    color: 'white',
    fontSize: 17,
    margin: 4,
  },
  title: {
    color: 'white',
    margin: 30,
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  title2: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  img1: {
    marginTop: 40,
    height: 170,
    width: 170,
    borderRadius: 170,
  },
  profileImageTx: {
    color: 'white',
    fontSize: 15,
    marginTop: 10,
  },
});

export default styles;
