import {StyleSheet} from 'react-native';

const bgColor1 = '#000000c0';
const bgColor2 = 'rgba(0, 0, 0, 0.8)';
const bgColor3 = '#FFA200';
const bgColor4 = '#EEEEEE';
const bgColor5 = '#BF1A1A';

const styles = StyleSheet.create({
  container1: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
    height: '100%',
    width: '100%',
  },
  title1: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    margin: 15,
    backgroundColor: bgColor1,
    height: 90,
    width: 340,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    margin: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgItem: {
    height: '80%',
    width: '50%',
  },
  itemTitle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },
  input: {
    backgroundColor: bgColor4,
    padding: 5,
    borderRadius: 12,
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    width: 300,
    margin: 10,
    height: 40,
    color: 'white',
  },
  container3: {
    width: '50%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
  },
});

export default styles;
