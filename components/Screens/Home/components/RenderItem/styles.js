import {StyleSheet} from 'react-native';
import {bgColor1, bgColor3, bgColor5} from '../../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: bgColor1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 90,
    width: 90,
    borderRadius: 20,
    margin: 10,
    padding: 2,
  },
  touchable1: {
    margin: 10,
  },
  imgItem: {
    height: 60,
    width: 70,
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  itemContainer2: {
    width: 100,
    height: 200,
    margin: 15,
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: bgColor1,
    alignItems: 'center',
  },
  imgItem2: {
    width: 85,
    height: 70,
    margin: 20,
  },
  itemview2: {
    borderRadius: 20,
    height: 110,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  itemTitle2: {
    fontSize: 13,
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
  },
  price: {
    color: bgColor3,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
  addbtn: {
    backgroundColor: bgColor5,
    borderRadius: 20,
    height: 25,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  txAddBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default styles;
