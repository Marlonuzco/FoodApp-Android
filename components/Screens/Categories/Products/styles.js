import {StyleSheet} from 'react-native';

const bgColor2 = 'rgba(0, 0, 0, 0.8)';
const bgColor1 = '#000000c0';
const bgColor3 = '#FFA200';
const bgColor4 = '#EEEEEE';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 10,
    color: bgColor5,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 225,
    width: 270,
    margin: 50,
  },
  addBtn: {
    backgroundColor: bgColor5,
    height: 40,
    width: 220,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
  },
  txBtn: {
    color: 'white',
    fontSize: 25,
  },
  tx2: {
    color: 'black',
    fontSize: 25,
    margin: 5,
  },
  tx3: {
    color: bgColor3,
    fontSize: 30,
    margin: 20,
    fontWeight: 'bold',
  },
  btn2: {
    backgroundColor: bgColor5,
    height: 50,
    width: 50,
    margin: 10,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: 'white',
  },
  container3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn3: {
    marginLeft: '65%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
