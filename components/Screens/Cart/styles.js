import {StyleSheet} from 'react-native';

import {bgColor1, bgColor3, bgColor5} from '../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    height: '65%',
    alignItems: 'center',
  },
  view2: {
    height: 110,
    width: 330,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: bgColor5,
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bgColor1,
    marginBottom: 20,
    height: 110,
    borderRadius: 20,
    margin: '5%',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: bgColor3,
  },
  renderItem: {
    height: 110,
    width: '85%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    flexDirection: 'row',
  },
  photo: {
    height: '70%',
    width: '100%',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
    marginLeft: '2%',
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  btn1: {
    backgroundColor: 'white',
    width: '20%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tx1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
  },
  tx2: {
    color: bgColor3,
    fontWeight: 'bold',
    fontSize: 25,
    margin: 10,
  },
  tx3: {
    color: 'white',
  },
  tx4: {
    color: bgColor3,
    fontSize: 22,
  },
  iconTrash: {
    margin: 10,
  },
  renderIconTrash: {
    color: bgColor3,
  },
  container4: {
    height: 50,
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
  },
  btnPay: {
    backgroundColor: bgColor3,
    height: 35,
    width: 150,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tx6: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  container5: {
    width: '55%',
  },
  tx5: {
    fontSize: 18,
    margin: 5,
    color: 'white',
  },
  tx7: {
    color: bgColor3,
    fontSize: 22,
    textAlign: 'right',
    marginRight: 7,
    fontWeight: 'bold',
  },
  container6: {
    width: '45%',
    justifyContent: 'center',
  },
  tx8: {
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
