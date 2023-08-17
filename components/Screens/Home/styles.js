import {StyleSheet} from 'react-native';
import {
  bgColor1,
  bgColor3,
  bgColor4,
  bgColor5,
} from '../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  input: {
    backgroundColor: bgColor4,
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: '95%',
    margin: 5,
    height: 40,
    color: 'black',
  },
  title: {
    textAlign: 'left',
    fontSize: 30,
    fontWeight: 'bold',
    color: bgColor3,
  },
  title2: {
    fontSize: 20,
    margin: 5,
    marginLeft: 13,
    fontWeight: 'bold',
    color: bgColor3,
    textAlign: 'left',
    marginRight: 25,
  },
  container1: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container3: {
    marginTop: 10,
    height: 50,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchable1: {
    margin: 10,
  },
  touchable5: {
    margin: 10,
    height: 100,
    width: 135,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tx1: {
    fontSize: 20,
    margin: 10,
  },
  tx: {
    marginLeft: 200,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  img2: {
    height: 50,
    width: 80,
  },
  searchIcon: {
    color: bgColor1,
    marginLeft: -40,
  },
  touchable2: {
    marginLeft: '55%',
  },
  container4: {
    alignItems: 'center',
  },
  container5: {
    height: 100,
    width: '95%',
    borderRadius: 20,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    flexDirection: 'row',
    display: 'flex',
    backgroundColor: bgColor5,
  },
  imgDelivey: {
    height: 90,
    width: 130,
    margin: 10,
  },
  container6: {
    flexDirection: 'column',
    marginRight: 10,
  },
  tx2: {
    color: bgColor3,
    fontSize: 18,
    fontWeight: 'bold',
  },
  tx3: {
    color: 'white',
    fontSize: 11,
    width: '100%',
  },
  tx4: {
    color: 'white',
    margin: 8,
  },
});

export default styles;
