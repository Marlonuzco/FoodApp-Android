import {StyleSheet} from 'react-native';

const bgColor3 = '#FFA200';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bgColor3,
    marginBottom: 20,
    height: 110,
    borderRadius: 20,
    margin: '5%',
  },
  photo: {
    height: '65%',
    width: '100%',
  },
  title2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  title3: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50%',
    color: 'gray',
  },
  container2: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '31%',
    marginLeft: '2%',
  },
  renderItem: {
    height: 110,
    width: '85%',
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: bgColor5,
    flexDirection: 'row',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    color: bgColor5,
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
});

export default styles;
