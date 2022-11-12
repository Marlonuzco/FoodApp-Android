import {StyleSheet} from 'react-native';

const bgColor1 = 'rgba(0, 0, 0, 0.6)';
const bgColor2 = 'rgba(52, 52, 52, 0.8)';
export const azul = 'blue';

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: 'center',
  },
  container0: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
  },
  container2: {
    flex: 3,
    margin: 50,
    marginTop: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container3: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 30,
  },
  container4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 40,
  },
  input: {
    backgroundColor: 'white',
    color: 'black',
    height: 50,
    borderRadius: 10,
    width: 300,
    padding: 10,
  },
  showBtn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 4,
  },
  error: {
    textAlign: 'center',
    color: 'red',
    fontSize: 20,
    margin: 10,
  },
  touchable3: {
    color: 'white',
    fontSize: 25,
  },
  txtouchable2: {
    fontSize: 18,
    color: 'white',
  },
  touchable2: {
    marginTop: 30,
    alignItems: 'center',
  },
  Loginbtn: {
    backgroundColor: 'blue',
    height: 50,
    width: 100,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
