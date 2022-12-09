import {StyleSheet} from 'react-native';

const bgColor2 = 'rgba(0, 0, 0, 0.8)';
const bgColor1 = '#000000c0';

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: '#9E9E9E',
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: '95%',
    margin: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: '25%',
    marginRight: '25%',
  },
  title2: {
    fontSize: 20,
    margin: 10,
    marginLeft: 250,
    fontWeight: 'bold',
    color: bgColor2,
  },
  container1: {
    flex: 1,
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginTop: 15,
    backgroundColor: bgColor2,
    borderRadius: 20,
    padding: 5,
  },
  container3: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    backgroundColor: bgColor2,
    justifyContent: 'center',
    alignItems: 'center',
    height: 130,
    width: 130,
    borderRadius: 20,
    margin: 10,
    padding: 10,
  },
  touchable1: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    height: 100,
    width: 120,
    borderRadius: 20,
  },
  itemTitle: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
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
    margin: 5,
    height: 50,
    width: 50,
    borderRadius: 60,
  },
  searchIcon: {
    color: bgColor1,
    marginLeft: -35,
  },
  touchable2: {
    backgroundColor: 'gray',
    borderRadius: 10,
    height: 45,
    width: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
