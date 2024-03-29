import {StyleSheet} from 'react-native';
import {bgColor1, bgColor3} from '../../../utils/GlobalStyles';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: bgColor3,
  },
  container1: {
    height: '75%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    marginBottom: 20,
    height: 110,
    borderRadius: 20,
    margin: '5%',
  },
  itemName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
    color: 'gray',
  },
  photo: {
    height: 80,
    width: 120,
    marginRight: 5,
  },
  container2: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    height: '80%',
    width: '100%',
  },
  container4: {
    height: '90%',
    width: 270,
    alignItems: 'center',
    flexDirection: 'row',
    marginRight: 15,
  },
  trashIcon: {
    color: bgColor3,
  },
});

export default styles;
