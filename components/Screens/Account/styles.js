import {StyleSheet} from 'react-native';

const bgColor1 = 'rgba(0, 0, 0, 0.6)';
const bgColor5 = '#BF1A1A';

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
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    padding: 8,
  },
  tx1: {
    color: 'white',
    fontSize: 20,
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
});

export default styles;
