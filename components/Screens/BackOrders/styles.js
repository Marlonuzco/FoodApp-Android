import {StyleSheet} from 'react-native';

const bgColor3 = '#FFA200';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: bgColor5,
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
    backgroundColor: bgColor5,
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
    height: '90%',
    width: '90%',
  },
  container2: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
