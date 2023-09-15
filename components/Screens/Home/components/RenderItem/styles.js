import {StyleSheet} from 'react-native';
import {bgColor1, bgColor3, bgColor5} from '../../../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  touchable1: {
    backgroundColor: bgColor1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    borderRadius: 20,
    margin: 15,
    padding: 10,
  },
  imgItem: {
    height: 50,
    width: 60,
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 12,
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
    padding: 10,
  },
  imgItem2: {
    width: 75,
    height: 60,
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
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'center',
    color: 'white',
    width: '90%',
  },
  price: {
    color: bgColor3,
    textAlign: 'center',
    margin: 5,
    fontWeight: 'bold',
    fontSize: 12,
    width: '90%',
  },
  addbtn: {
    backgroundColor: bgColor5,
    borderRadius: 15,
    height: 25,
    width: 85,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 5,
  },
  txAddBtn: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 10,
  },
});

export default styles;
