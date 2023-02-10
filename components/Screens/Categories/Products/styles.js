import {StyleSheet} from 'react-native';

const bgColor2 = 'rgba(0, 0, 0, 0.8)';
const bgColor1 = '#000000c0';
const bgColor3 = '#FFA200';
const bgColor4 = '#EEEEEE';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: bgColor1,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    color: bgColor5,
    marginLeft: 70,
    marginRight: 70,
    margin: 10,
    textAlign: 'center',
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    height: 200,
    width: 240,
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
    color: 'white',
    fontSize: 25,
    margin: 15,
    textAlign: 'center',
    marginTop: 25,
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
    justifyContent: 'center',
    marginBottom: '25%',
    backgroundColor: bgColor3,
    width: '100%',
  },
  btn3: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
