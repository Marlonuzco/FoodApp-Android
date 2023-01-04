import {StyleSheet} from 'react-native';

const bgColor3 = '#FFA200';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  view1: {
    height: '75%',
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
    backgroundColor: bgColor3,
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
    color: bgColor5,
  },
  renderItem: {
    height: 110,
    width: '85%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: bgColor5,
    flexDirection: 'row',
  },
  photo: {
    height: '65%',
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
  container4: {
    height: 50,
    flexDirection: 'row',
  },
  btnPay: {
    backgroundColor: bgColor5,
    height: 35,
    margin: 20,
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
    fontSize: 22,
    margin: 5,
    color: 'gray',
  },
  tx7: {
    color: bgColor3,
    fontSize: 25,
    textAlign: 'right',
    marginRight: 7,
    fontWeight: 'bold',
  },
  container6: {
    width: '45%',
    justifyContent: 'center',
  },
  title3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
    color: 'gray',
  },
  btn2: {
    backgroundColor: bgColor5,
    borderRadius: 20,
    height: 60,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  tx8: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  tx9: {
    color: 'white',
    fontSize: 15,
  },
});

export default styles;
