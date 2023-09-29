import {StyleSheet} from 'react-native';
import {bgColor1, bgColor3} from '../../../../utils/GlobalStyles';

const sytles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: bgColor1,
    marginBottom: 20,
    height: 110,
    borderRadius: 20,
    margin: 20,
  },
  itemName: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
    color: 'gray',
  },
  photo: {
    height: 70,
    width: 110,
    marginRight: 5,
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

export default sytles;
