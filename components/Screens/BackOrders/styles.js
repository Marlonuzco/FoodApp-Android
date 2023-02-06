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
  renderItem: {
    height: '50%',
    width: '90%',
    backgroundColor: 'black',
  },
  itemName: {
    color: 'black',
  },
  title2: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
    color: 'gray',
  },
});

export default styles;
